import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "footer.broughtToYouBy": "Brought to you by ",
      "home.headerTagLine":
        "Instantly test your mTLS <code>server</code> and <code>client</code> while getting some tips on how to easily setup up this mess.",

      "home.mtlsServerCardDescription":
        "Upload a <strong>client certificate</strong> to test your mTLS public server with one click from a ready to request online client with code examples.",

      "home.mtlsClientCardDescription":
        "Download a <strong>client certificate</strong> and make a quick connection test from your application to a ready to ping mTLS server.",

      "home.sidecarProxyCardDescription":
        "Leave the mTLS dirty job away from your API endpoints using this Sidecar Proxy Docker image, standalone on in your prefered cluster provider.",

      "home.ambassadorGatewayCardDescription":
        "Need some help making a request to an mTLS server? This Ambassador Docker image got you covered! Make a regular request to it and it will handle the mTLS stuff.",

      "sidecar.headerTagLine":
        'So, you want to secure an API using mTLS but you don\'t want to run on all the details of that or mess up your current code and infraestructure? If your answer is "yes", then the <strong>Sidecar Proxy</strong> is exactly what you need.',

      "sidecar.aFullExampleToDownload":
        'A full example including server and client certificates to download can be found at <a className="ml-1 underline" href="https://github.com/bancodobrasil/api-mtls-sidecar-proxy"> bancodobrasil/api-mtls-sidecar-proxy </a>',

      "sidecar.toPutYourmTLSSidecarToRun": "To put your mTLS Sidecar Proxy to run you will have to get those 3 PEM files:",

      "sidecar.1serverPEMUsedToMakeTheTLS": "<strong>1. server.pem</strong>: used to make the TLS (HTTPS) connection",
      "sidecar.2serverKeyPEMAlsoUsed": "<strong>2. server-key.pem</strong>: also used to make the TLS (HTTPS) connection",
      "sidecar.3clientsCAPEMUsedToVerify":
        "<strong>3. clients-ca.pem</strong>: used to verify if the client certificates used on the incoming connections",

      "sidecar.certificateFilesListDescription":
        "The server-key.pem and server.pem should be from a trustworthy Certification Authority, such as Let's Encrypt, Glogal Sign, Verisign, Digicert and so son. The clients-ca.pem must be an intermediate AC (could be self generated) that was used to generate the client certificates used to authenticate the connection",
    },
  },
  pt: {
    translation: {
      "footer.broughtToYouBy": "Desenvolvido por",
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
