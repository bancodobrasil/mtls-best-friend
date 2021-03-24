import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Layout from "../../components/layout";

export default function Client() {
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
            <span className="mr-2 font-bold">Client</span>
            <span className="text-blue-600 font-bold">TEST</span>
          </h1>

          <div className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto text-center text-2xl">
            <p>
              {t("get-a-sample-mtls-server-at")}{" "}
              <a href="github.com/bancodobrasil/api-mtls-sidecar-proxy" className="underline text-blue-600" target="_blank" rel="noreferer">
                github.com/bancodobrasil/api-mtls-sidecar-proxy
              </a>
            </p>

            <p className="text-sm">
              {t("contribute-to-mtls-bff-project-at")}{" "}
              <a
                href="https://github.com/bancodobrasil/mtls-best-friend"
                className="underline text-blue-600"
                target="_blank"
                rel="noreferer"
              >
                github.com/bancodobrasil/mtls-best-friend
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
