import React from "react";
import Head from "next/head";
import "../i18n";
import { Trans } from "react-i18next";

import Navbar from "../../common/navbar";
import Footer from "../../common/footer";

export default function Ambassador() {
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
            <span className="mr-2 font-bold">Ambassador</span>
            <span className="text-blue-600 font-bold">GATEWAY</span>
          </h1>

          <p className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <Trans i18nKey="Soon!" />
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}
