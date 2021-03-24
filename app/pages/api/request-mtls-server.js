const https = require("https");

module.exports = async (req, res) => {
  try {
    const urlObj = new URL(req.body.url);
    https
      .get(
        {
          host: urlObj.host,
          hostname: urlObj.hostname,
          port: urlObj.port,
          path: urlObj.path,
          pathname: urlObj.pathname,
          method: req.body.method,
          rejectUnauthorized: false,
          cert: req.body.certificate,
          key: req.body.key,
          ca: req.body.ca,
        },
        (resRemote) => {
          if (resRemote.statusCode !== 200) {
            console.error(`expected status 200 but found ${resRemote.statusCode}`);
            res.statusCode = resRemote.statusCode;
          }
          return resRemote.pipe(res);
        }
      )
      .on("error", (error) => {
        console.error("Error doinig handshake", error);
        res.status(500).json({ message: "Error requesting to mTLS server" });
      });
  } catch (error) {
    const message = "Error preparing the mTLS request. Details:" + error;
    if (error.toString().match(/no start line/g)) {
      return res.status(400).json({ message });
    }
    return res.status(500).json({ message });
  }
};
