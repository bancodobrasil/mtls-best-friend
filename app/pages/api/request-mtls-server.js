const https = require("https");
const sslCertificate = require("get-ssl-certificate");

module.exports = async (req, res) => {
  try {
    const urlObj = new URL(req.body.url);

    // add the certificate from the server as trust on the fly
    let serverCertificate = null;

    try {
      serverCertificate = await sslCertificate.get(
        urlObj.hostname,
        null,
        urlObj.port
      );
      serverCertificate = serverCertificate.pemEncoded;
    } catch (error) {
      console.error("Error resolving server certificate on the fly");
    }

    let headers = {};
    const data = JSON.stringify({
      payload: "mTLS test",
    });
    if (req.body.method === "POST") {
      headers = {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      };
    }

    const proxyRequest = https.request(
      {
        host: urlObj.host,
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.path,
        pathname: urlObj.pathname,
        method: req.body.method,
        headers,
        rejectUnauthorized: false,
        cert: req.body.certificate,
        key: req.body.key,
        ca: serverCertificate,
      },
      (resRemote) => {
        resRemote.on("data", (d) => {
          process.stdout.write(d);
        });
        if (resRemote.statusCode !== 200) {
          console.error(
            `expected status 200 but found ${resRemote.statusCode}`
          );
          res.statusCode = resRemote.statusCode;
        }
        return resRemote.pipe(res);
      }
    );

    proxyRequest.on("error", (error) => {
      console.error("Error doinig handshake", error);
      res.status(500).json({ message: "Error requesting to mTLS server" });
    });

    if (req.body.method === "POST") {
      proxyRequest.write(data);
    }
    proxyRequest.end();
  } catch (error) {
    console.error(error);
    const message = "Error preparing the mTLS request. Details:" + error;
    if (error.toString().match(/no start line/g)) {
      return res.status(400).json({ message });
    }
    return res.status(500).json({ message });
  }
};
