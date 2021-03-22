import React, { useState } from "react";
import { Trans } from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ItemTestWithValidCertificate from "./itemTestWithValidCertificate";

const Sweet = withReactContent(Swal);

export default function SubmitRequestForm() {
  const [url, setURL] = useState();
  const [key, setKey] = useState();
  const [certificate, setCertificate] = useState();
  const [ca, setCA] = useState();

  const submit = async () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ url, key, certificate, ca }),
    // };
    // const res = await fetch("/api/request-mtls-server", requestOptions);
    // const remoteMTLSResponse = await res.json();
    Sweet.fire({
      title: (
        <div>
          <Trans i18nKey="server.TestingYourMTLSServer" />
          ...
        </div>
      ),
      html: (
        <div>
          <ul>
            <li>
              <ItemTestWithValidCertificate />
            </li>
          </ul>
        </div>
      ),
      showClass: {
        popup: "sweet-popup-open",
      },
    });
  };

  return (
    <div className="border-l border-b border-gray-200 rounded p-8">
      <Trans i18nKey="server.uploadInstructionsLine1" />

      <div className="bg-gray-100 px-4 py-4 mt-4">
        <div className="flex flex-col">
          <span>
            <Trans i18nKey="server.URLToTest" />
          </span>
          <input onChange={(e) => setURL(e.target.value)} placeholder="https://<your_mtls_endpoint>" className="border p-2" />
        </div>
        <div className="flex flex-col mt-4">
          <span>
            <Trans i18nKey="server.privateKeyLabelUpload" />
          </span>
          <textarea
            onChange={(e) => setKey(e.target.value)}
            className="border font-mono text-sm mt-2 p-4"
            rows="8"
            placeholder={`-----BEGIN PRIVATE KEY-----

-----END PRIVATE KEY-----`}
          />
        </div>
        <div className="flex flex-col mt-4">
          <span>
            <Trans i18nKey="server.certificateLabelUpload" />
          </span>
          <textarea
            onChange={(e) => setCertificate(e.target.value)}
            className="border"
            rows="8"
            className="border font-mono text-sm mt-2 p-4"
            placeholder={`-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----`}
          />
        </div>
        <div className="flex flex-col mt-4">
          <span>
            <Trans i18nKey="server.caLabelUpload" />
          </span>
          <textarea
            onChange={(e) => setCA(e.target.value)}
            className="border"
            rows="8"
            className="border font-mono text-sm mt-2 p-4"
            placeholder={`-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----`}
          />
        </div>
        <div className="mt-4 text-right">
          <button onClick={submit} className="bg-green-500 text-white px-5 py-1 text-2xl rounded shadow-xl">
            <Trans i18nKey="Test now!" />
          </button>
        </div>
      </div>
    </div>
  );
}
