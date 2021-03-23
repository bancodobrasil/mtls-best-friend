import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../components/layout";

export default function Ambassador() {
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
            Contribute to this project at{" "}
            <a href="https://github.com/bancodobrasil/mtls-best-friend" className="underline text-blue-600" target="_blank" rel="noreferer">
              https://github.com/bancodobrasil/mtls-best-friend
            </a>
          </p>
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
