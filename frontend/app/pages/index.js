import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Head>
        <title>mTLS Best Friend</title>
        <link rel="icon" href="/logo_labbs.png" />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <h1 className="col-span-1 md:col-span-2 title flex justify-center items-center my-4 text-6xl">
          <span className="mr-2 font-bold">mTLS</span>
          <span className="text-blue-600">BFF</span> <img src="/heart.png" className="h-14" />
        </h1>

        <p className="col-span-1 md:col-span-2 max-w-screen-md mx-auto description">
          Instantly test your mTLS <code>server</code> and <code>client</code> while getting some tips on how to easily setup up this mess.
        </p>

        <a href="/test-server" className="card">
          <h3 className="font-bold">mTLS Server &rarr;</h3>
          <p>
            Upload a <strong>client certificate</strong> to test your mTLS public server with one click from a ready to request online
            client with code examples.
          </p>
        </a>

        <a href="/test-client" className="card">
          <h3 className="font-bold">mTLS Client &rarr;</h3>
          <p>
            Download a <strong>client certificate</strong> and make a quick connection test from your application to a ready to ping mTLS
            server.
          </p>
        </a>

        <a href="/sidecar" className="card">
          <h3 className="font-bold">Sidecar Proxy &rarr;</h3>
          <p>
            Leave the mTLS dirty job away from your API endpoints using this Sidecar Proxy Docker image, standalone on in your prefered
            cluster provider.
          </p>
        </a>

        <a href="/ambassador" className="card">
          <h3 className="font-bold">Ambassador Gateway &rarr;</h3>
          <p>
            Need a help making a request to an mTLS server? This Ambassador Docker image got you covered! Make a regular request to it and
            it will handle the mTLS stuff.
          </p>
        </a>
      </main>

      <footer className="mt-8 mb-4 pt-4 flex justify-center items-center border-t">
        <a href="https://www.bb.com.br" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center">
          Brought to you by <img src="/logo_bb.jpg" alt="Logo BB" className="logo mt-2 w-10" />
        </a>
      </footer>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

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

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
