import Head from "next/head";
import Link from "next/link";
import { Trans } from "react-i18next";
import Layout from "../components/layout";

import "./i18n";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>mTLS Best Friend</title>
        <link rel="icon" href="/logo_labbs.png" />
      </Head>
      <div className="container mx-auto max-w-screen-lg pt-8">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1 className="col-span-1 md:col-span-2 title flex justify-center items-center my-4 text-6xl">
            <span className="mr-2 font-bold">mTLS</span>
            <span className="text-blue-600 font-bold">Best Friend</span>
          </h1>

          <p className="col-span-1 md:col-span-2 max-w-screen-md mx-auto text-2xl text-center">
            <Trans i18nKey="home.headerTagLine" components={{ code: <code /> }} />
          </p>

          <Link href="/server">
            <div className="card cursor-pointer">
              <h3 className="font-bold">mTLS Server Test &rarr;</h3>
              <p>
                <Trans i18nKey="home.mtlsServerCardDescription" />
              </p>
            </div>
          </Link>

          <Link href="/client">
            <div className="card cursor-pointer">
              <h3 className="font-bold">mTLS Client Test &rarr;</h3>
              <p>
                <Trans i18nKey="home.mtlsClientCardDescription" />
              </p>
            </div>
          </Link>

          <Link href="/sidecar">
            <div className="card cursor-pointer">
              <h3 className="font-bold">Sidecar Proxy &rarr;</h3>
              <p>
                <Trans i18nKey="home.sidecarProxyCardDescription" />
              </p>
            </div>
          </Link>

          <Link href="/ambassador" className="card">
            <div className="card cursor-pointer">
              <h3 className="font-bold">Ambassador Gateway &rarr;</h3>
              <p>
                <Trans i18nKey="home.ambassadorGatewayCardDescription" />
              </p>
            </div>
          </Link>
        </main>

        <style jsx>{`
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .card {
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </Layout>
  );
}
