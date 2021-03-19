import Head from "next/head";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import "../i18n";
import { Trans } from "react-i18next";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg pt-8">
        <Head>
          <title>mTLS Best Friend</title>
          <link rel="icon" href="/logo_labbs.png" />
        </Head>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1 className="col-span-1 md:col-span-2 title flex justify-center items-center my-4 text-6xl">
            <span className="mr-2 font-bold">Sidecar</span>
            <span className="text-blue-600">PROXY</span>
          </h1>

          <p className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <Trans i18nKey="sidecar.headerTagLine" />
          </p>

          <div className="border-r border-b border-gray-200 rounded p-8">
            <img src="/mTLS-sidecar-proxy.png" />
          </div>
          <div className="border-l border-b border-gray-200 rounded p-8">
            <div>
              <pre className="text-sm">{`
version: "3.7"

services:
  mtls-sidecar:
    image: labbsr0x/api-mtls-sidecar-proxy:0.0.1
    environment:
      - PROXY_PASS=http://<your_API_router_endpoint>
      - ALLOWED_SSL_CLIENT_S_DN=all
    volumes:
      - ./path/to/certs:/etc/nginx/conf.d/certs
    ports:
      - 443:443
            `}</pre>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto p-10 border border-gray-100 shadow-md text-white bg-gray-700">
            <Trans i18nKey="sidecar.aFullExampleToDownload" components={{ a: <a /> }} />
          </div>

          <div className="border-r border-t border-gray-200 rounded p-8">
            <Trans i18nKey="sidecar.toPutYourmTLSSidecarToRun" />

            <ol className="ml-4 mt-2 list-decimal">
              <li>
                <Trans i18nKey="sidecar.1serverPEMUsedToMakeTheTLS" />
              </li>
              <li>
                <Trans i18nKey="sidecar.2serverKeyPEMAlsoUsed" />
              </li>
              <li>
                <Trans i18nKey="sidecar.3clientsCAPEMUsedToVerify" />
              </li>
            </ol>
            <p className="mt-4">
              <Trans i18nKey="sidecar.certificateFilesListDescription" />
            </p>
          </div>

          <div className="border-l border-t border-gray-200 rounded p-8">
            <Trans i18nKey="sidecar.downloadCertificateToTestLocalInstructions" components={{ code: <code /> }} />
            <ul className="list-disc ml-4 mt-4 mb-4">
              <li>
                <a href="">
                  <strong>server.pem</strong>
                </a>
              </li>
              <li>
                <a href="">
                  <strong>server-key.pem</strong>
                </a>
              </li>
              <li>
                <a href="">
                  <strong>clientes-ca.pem</strong>
                </a>
              </li>
            </ul>
            <div className="mt-2">
              <Trans i18nKey="sidecar.dockerComposeUpInstructions" />
              <div className="bg-gray-50 p-3 mt-2">
                <code className="text-sm">$ docker-compose up</code>
              </div>
            </div>

            <div className="mt-2">
              <Trans i18nKey="sidecar.curlToTestInstructions" />
              <div className="bg-gray-50 p-3 mt-2">
                <code className="text-sm">
                  $ curl --cacert ./clients-ca.pem --key ./client.key.pem --cert ./client.pem -k https://localhost
                </code>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
