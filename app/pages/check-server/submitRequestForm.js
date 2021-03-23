import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans } from "next-i18next";

import ItemTestWithInvalidCertificate from "./itemTestWithInvalidCertificate";
import ItemTestWithoutCertificate from "./itemTestWithoutCertificate";
import ItemTestWithValidCertificate from "./itemTestWithValidCertificate";

const Sweet = withReactContent(Swal);

export default function SubmitRequestForm() {
  const [url, setURL] = useState();
  const [clientKey, setClientKey] = useState();
  const [certificate, setCertificate] = useState();
  const [ca, setCA] = useState();

  const [methodGET, setMethodGET] = useState(true);
  const [methodPOST, setMethodPOST] = useState(true);
  const [methods, setMethods] = useState(["GET", "POST"]);

  useEffect(() => {
    let mss = [];
    if (methodGET) {
      mss.push("GET");
    }
    if (methodPOST) {
      mss.push("POST");
    }
    setMethods(mss);
  }, [methodGET, methodPOST]);

  const title = "Testing your mTLS Server";

  const submit = async () => {
    Sweet.fire({
      title: (
        <div>
          {title}
          ...
        </div>
      ),
      width: "800px",
      html: (
        <div>
          <h4 className="mt-4 mb-6">
            <strong className="text-blue">{url}</strong>
          </h4>
          <ul className="flex flex-col items-center justify-center">
            {methods.map((m) => (
              <>
                <li className="mb-2">
                  <ItemTestWithValidCertificate url={url} method={m} clientKey={clientKey} certificate={certificate} ca={ca} />
                </li>
                <li className="mb-2">
                  <ItemTestWithoutCertificate url={url} method={m} />
                </li>
                <li className="mb-2">
                  <ItemTestWithInvalidCertificate url={url} method={m} />
                </li>
              </>
            ))}
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
      <Trans i18nKey="server-upload-instructions" />

      <div className="bg-gray-100 px-4 py-4 mt-4">
        <div className="flex flex-col">
          <span>
            <Trans i18nKey="url-to-test" />
          </span>
          <input onChange={(e) => setURL(e.target.value)} placeholder="https://<your_mtls_endpoint>" className="border p-2" />
        </div>
        <div className="flex flex-col mt-4">
          <span>
            <Trans i18nKey="private-key-label-upload" />
          </span>
          <textarea
            onChange={(e) => setClientKey(e.target.value)}
            className="border font-mono text-sm mt-2 p-4"
            rows="8"
            placeholder={`-----BEGIN PRIVATE KEY-----

-----END PRIVATE KEY-----`}
          />
        </div>
        <div className="flex flex-col mt-4">
          <span>
            <Trans i18nKey="certificate-label-upload" />
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
            <Trans i18nKey="ca-label-upload" />
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
        <div className="flex flex-row mt-4 justify-end">
          <div>
            <input type="checkbox" defaultChecked={methodGET} id="methodGET" onChange={() => setMethodGET(!methodGET)} />
            <label htmlFor="methodGET" className="ml-1">
              GET
            </label>
          </div>
          <div className="ml-6">
            <input type="checkbox" defaultChecked={methodPOST} id="methodPOST" onChange={() => setMethodPOST(!methodPOST)} />
            <label htmlFor="methodPOST" className="ml-1">
              POST
            </label>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button onClick={submit} className="bg-green-500 text-white px-5 py-1 text-2xl rounded shadow-xl disabled:opacity-20">
            <Trans i18nKey="test-now" />
          </button>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
