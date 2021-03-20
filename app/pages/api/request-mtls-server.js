const fs = require("fs");
const https = require("https");

export default function handler(req, res) {
  try {
    https
      .get(
        {
          hostname: req.body.url.replace(/http[s]*:\/\//g, ""),
          port: 443,
          path: "/",
          method: "GET",
          cert: req.body.certificate,
          key: req.body.key,
          ca: req.body.ca,
        },
        (resRemote) => {
          if (resRemote.statusCode != 200) {
            console.error(`expected status 200 but found ${res.statusCode}`);
          }
          return resRemote.pipe(res);
        }
      )
      .on("error", (error) => {
        console.error("Error doinig handshake", error);
        res.status(500).json({ message: "Error requesting to mTLS server" });
      });
  } catch (error) {
    if (error.toString().match(/no start line/g)) {
      const message = "Error preparing the mTLS request. Details:" + error;
      return res.status(400).json({ message });
    }
    return res.status(500).json({ message });
  }
}
