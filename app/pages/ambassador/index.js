import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans } from "next-i18next";

import { useTranslation } from "next-i18next";

import Layout from "../../components/layout";

export default function Ambassador() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <Head>
        <title>mTLS Best Friend</title>
        <link rel="icon" href="/logo_labbs.png" />
      </Head>
      <div className="container mx-auto max-w-screen-lg pt-8">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1 className="col-span-1 md:col-span-2 title flex justify-center items-center my-4 text-6xl">
            <span className="mr-2 font-bold">Ambassador</span>
            <span className="text-blue-600 font-bold">TEST</span>
          </h1>

          <p className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <Trans i18nKey="ambassador-header-tag-line" />
          </p>

          <div className="border-r border-b border-gray-200 rounded p-8">
            <Image src="/mTLS-ambassador-gateway.png" alt="sidecar proxy diagram" height={291} width={427} />
          </div>
          <div className="border-l border-b border-gray-200 rounded p-8">
            <div>
              <pre className="text-sm">{`
version: "3.7"

services:
  mtls-ambassador:
    image: labbsr0x/api-mtls-ambassador-gateway:0.0.2
    environment:
      - PROXY_PASS=http://<your_API_router_endpoint>
      - PROXY_SSL_VERIFY=off
    volumes:
      - ./path/to/certs:/etc/nginx/conf.d/certs
    ports:
      - 9090:80
            `}</pre>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto p-10 border border-gray-100 shadow-md text-white bg-gray-700">
            <Trans i18nKey="ambassador-a-full-example-to-download" components={{ a: <a /> }} />
          </div>

          <div className="border-r border-t border-gray-200 rounded p-8">
            <Trans i18nKey="put-your-mTLS-ambassador-to-run" />

            <ol className="ml-4 mt-2 list-decimal">
              <li>
                <Trans i18nKey="client-pem-used-to-make-the-tls" />
              </li>
              <li>
                <Trans i18nKey="client-key-pem-also-used" />
              </li>
              <li>
                <Trans i18nKey="server-ca-pem-used-to-verify" />
              </li>
            </ol>
            <p className="mt-4">
              <Trans i18nKey="ambassador-certificate-files-list-description" components={{ code: <code /> }} />
            </p>
          </div>

          <div className="border-l border-t border-gray-200 rounded p-8">
            <Trans i18nKey="ambassador-download-trusted-client-certificate-to-test-local-instructions" components={{ code: <code /> }} />
            <ul className="list-disc ml-4 mt-4 mb-4">
              <li>
                <a href="/demo/certs/client.pem" className="underline text-blue-600">
                  client.pem
                </a>
              </li>
              <li>
                <a href="/demo/certs/client-key.pem" className="underline text-blue-600">
                  client-key.pem
                </a>
              </li>
              <li>
                <a href="/demo/certs/server-ca.pem" className="underline text-blue-600">
                  server-ca.pem
                </a>
              </li>
            </ul>
            <div className="mt-2">
              <Trans i18nKey="docker-compose-up-instructions" />
              <div className="bg-gray-50 p-3 mt-2">
                <code className="text-sm">$ docker-compose up</code>
              </div>
            </div>

            <div className="mt-2">
              <Trans i18nKey="curl-to-test-instructions" components={{ code: <code /> }} />
              <div className="bg-gray-50 p-3 mt-2">
                <code className="text-sm">$ curl http://localhost:9090</code>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
