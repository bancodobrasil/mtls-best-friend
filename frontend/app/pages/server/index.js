import React from "react";
import Head from "next/head";
import "../i18n";
import { Trans } from "react-i18next";

import Navbar from "../../common/navbar";
import Footer from "../../common/footer";

export default function Server() {
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
            <span className="mr-2 font-bold">Server</span>
            <span className="text-blue-600 font-bold">TEST</span>
          </h1>

          <p className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <Trans i18nKey="server.headerTagLine" />
          </p>

          <div className="border-r border-b border-gray-200 rounded p-8">
            <img src="/mTLS-server-test.png" />
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

          <div className="border-l border-b border-gray-200 rounded p-8">
            <Trans i18nKey="server.uploadInstructionsLine1" />

            <div className="bg-gray-100 px-4 py-4 mt-4">
              <div className="flex flex-col">
                <span>
                  <Trans i18nKey="server.URLToTest" />
                </span>
                <input placeholder="https://<your_mtls_endpoint>" className="border p-2" />
              </div>
              <div className="flex flex-col mt-4">
                <span>
                  <Trans i18nKey="server.privateKeyLabelUpload" />
                </span>
                <textarea
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
                  className="border"
                  rows="8"
                  className="border font-mono text-sm mt-2 p-4"
                  placeholder={`-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----`}
                />
              </div>
              <div className="mt-4 text-right">
                <button className="bg-green-500 text-white px-5 py-1 text-2xl rounded shadow-xl">
                  <Trans i18nKey="Test now!" />
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
