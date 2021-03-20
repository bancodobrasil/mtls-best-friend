import Head from "next/head";
import Image from "next/image";
import { Trans } from "react-i18next";

import "../i18n";
import Layout from "../../components/layout";
import SubmitRequestForm from "./submitRequestForm";

export default function Server() {
  return (
    <Layout>
      <Head>
        <title>mTLS Best Friend</title>
        <link rel="icon" href="/logo_labbs.png" />
      </Head>
      <div className="container mx-auto max-w-screen-lg pt-8">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1 className="col-span-1 md:col-span-2 title flex justify-center items-center my-4 text-6xl">
            <span className="mr-2 font-bold">Server</span>
            <span className="text-blue-600 font-bold">TEST</span>
          </h1>

          <p className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <Trans i18nKey="server.headerTagLine" />
          </p>

          <div className="border-r border-b border-gray-200 rounded p-8">
            <Image src="/mTLS-server-test.png" alt="server requesting diagram" height={367} width={458} />
            <div className="mt-8">
              <Trans i18nKey="server.theTestStepsAre" />
              <ol className="ml-4 mt-2 list-decimal">
                <li>
                  <Trans i18nKey="server.attemptToMakePOSTGETRequestWithCertificate" components={{ code: <code /> }} />
                </li>
                <li>
                  <Trans i18nKey="server.attemptToMakeRegularRequestWithoutCertificate" components={{ code: <code /> }} />
                </li>
                <li>
                  <Trans i18nKey="server.attemptToMakePOSTGETRequestWithAnotherCertificate" components={{ code: <code /> }} />
                </li>
              </ol>
            </div>
          </div>

          <SubmitRequestForm />
        </main>
      </div>
    </Layout>
  );
}
