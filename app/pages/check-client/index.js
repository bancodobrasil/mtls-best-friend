import Head from "next/head";
import Image from "next/image";
import { faCopy } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans } from "next-i18next";
import { useTranslation } from "next-i18next";

import Layout from "../../components/layout";
import { useState } from "react";

export default function Client() {
  const { t } = useTranslation("common");

  const copyTestServerAddress = () => {
    return navigator.clipboard.writeText("https://sidecar.mtls.labbs.com.br");
  };
  const copyCurlCommand = () => {
    return navigator.clipboard.writeText(
      "curl --cacert ./server-ca.pem --key ./client-key.pem --cert ./client.pem -k https://sidecar.mtls.labbs.com.br"
    );
  };

  const CopyButton = ({ onCopy }) => {
    const [copyStatus, setCopyStatus] = useState("off");

    const toggleCopy = async () => {
      try {
        await onCopy();
        setCopyStatus("done");
        setTimeout(() => setCopyStatus("off"), 1000);
      } catch (error) {
        setCopyStatus("off");
      }
    };
    const textColor = copyStatus === "done" ? "text-green-600" : "text-gray-600";
    return (
      <button onClick={toggleCopy}>
        <FontAwesomeIcon icon={faCopy} className={textColor} width={16} />
      </button>
    );
  };

  return (
    <Layout>
      <Head>
        <title>mTLS Best Friend</title>
        <link rel="icon" href="/logo_labbs.png" />
      </Head>
      <div className="container mx-auto max-w-screen-lg pt-8">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1 className="col-span-1 md:col-span-2 title flex justify-center items-center my-4 text-6xl">
            <span className="mr-2 font-bold">Client</span>
            <span className="text-blue-600 font-bold">TEST</span>
          </h1>

          <p className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <Trans i18nKey="client-header-tagline" />
          </p>

          <div className="border-r border-b border-gray-200 rounded p-8">
            <Image src="/mTLS-client-test.png" alt="client requesting diagram" height={349} width={475} />
          </div>

          <div className="border-l border-b border-gray-200 rounded p-8">
            <Trans i18nKey="steps-followed-to-the-test-server" />:
            <ol className="ml-4 mt-2 list-decimal">
              <li>
                <Trans i18nKey="download-the-client-key-and-certificate">
                  Download the client <a href="/demo/certs/client-key.pem">key</a> and <a href="/">certificate</a> you will use in your
                  client application
                </Trans>
                :
                <ul className="ml-4 text-blue-600 underline list-disc">
                  <li>
                    <a href="/demo/certs/client-key.pem">{t("download-client-key")}</a>
                  </li>
                  <li>
                    <a href="/demo/certs/client.pem">{t("download-client-certificate")}</a>
                  </li>
                </ul>
              </li>
              <li>
                <Trans i18nKey="download-server-ca-to-add-to-trust" />:
                <ul className="ml-4 text-blue-600 underline list-disc">
                  <li>
                    <a href="/demo/certs/server-ca.pem">{t("download-server-ca")}</a>
                  </li>
                </ul>
              </li>
              <li>
                <Trans i18nKey="send-the-request-to-test-server-at" />
                <span className="flex flex-row">
                  <strong className="ml-1 mr-1">https://sidecar.mtls.labbs.com.br</strong>
                  <CopyButton onCopy={copyTestServerAddress} />
                </span>
              </li>
            </ol>
            <div className="mt-2">
              <Trans i18nKey="curl-to-test-certificates" components={{ code: <code /> }} />
              <div className="bg-gray-50 p-3 mt-2">
                <code className="text-sm">
                  $ curl --cacert ./server-ca.pem --key ./client-key.pem --cert ./client.pem -k https://sidecar.mtls.labbs.com.br
                </code>
                <div className="flex justify-end mt-2">
                  <CopyButton onCopy={copyCurlCommand} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <p className="mb-4">
              {t("get-a-sample-mtls-server-at")}{" "}
              <a
                href="https://github.com/bancodobrasil/api-mtls-sidecar-proxy"
                className="underline text-blue-600"
                target="_blank"
                rel="noreferer"
              >
                bancodobrasil/api-mtls-sidecar-proxy
              </a>
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const trans = await serverSideTranslations(locale, ["common"]);
  return {
    props: {
      ...trans,
    },
  };
};
