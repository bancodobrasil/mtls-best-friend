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
          <span className="mr-2 font-bold">Sidecar</span>
          <span className="text-blue-600">PROXY</span> <img src="/heart.png" className="h-14" />
        </h1>

        <p className="col-span-1 md:col-span-2 max-w-screen-lg mx-auto">
          So, you want to secure an API using mTLS but you don't want to run on all the details of that or mess up your current code or
          infraestructure? If your answer is "yes", then the <strong>Sidecar Proxy</strong> is exactly what you need.
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
          A full example including server and client certificates to download can be found at
          <a className="ml-1 underline" href="https://github.com/bancodobrasil/api-mtls-sidecar-proxy">
            bancodobrasil/api-mtls-sidecar-proxy
          </a>
        </div>

        <div className="border-r border-t border-gray-200 rounded p-8">
          To put your mTLS Sidecar Proxy to run you will have to get those 3 PEM files:
          <ol className="ml-4 mt-2">
            <li>
              <strong>1. server.pem</strong>: used to make the TLS (HTTPS) connection
            </li>
            <li>
              <strong>2. server-key.pem</strong>: also used to make the TLS (HTTPS) connection
            </li>
            <li>
              <strong>3. clients-ca.pem</strong>: used to verify if the client certificates used on the incoming connections
            </li>
          </ol>
          <p className="mt-4">
            The server-key.pem and server.pem should be from a trustworthy Certification Authority, such as Let's Encrypt, Glogal Sign,
            Verisign, Digicert and so son. The clients-ca.pem must be an intermediate AC (could be self generated) that was used to generate
            the client certificates used to authenticate the connection
          </p>
        </div>
      </main>

      <footer className="mt-8 mb-4 pt-4 flex justify-center items-center border-t">
        <a href="https://www.bb.com.br" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center">
          Brought to you by <img src="/logo_bb.jpg" alt="Logo BB" className="logo mt-2 w-10" />
        </a>
      </footer>
    </div>
  );
}
