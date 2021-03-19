import React from "react";
import Link from "next/link";

export default () => {
  return (
    <div className="w-full p-3 border-b">
      <nav className="container max-w-screen-lg  mx-auto flex flex-row justify-between">
        <Link href="/">
          <div className="flex justify-center items-center text-xl cursor-pointer">
            <span className="font-bold">mTLS</span>
            <span className="text-blue-600">BFF</span>
            <img src="/heart.png" className="h-10" />
          </div>
        </Link>
        <ul className="flex justify-around items-center w-4/6 text-gray-600">
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/"> Server </Link>
          </li>
          <li>
            <Link href="/"> Client</Link>
          </li>
          <li>
            <Link href="/sidecar"> Sidecar</Link>
          </li>
          <li>
            <Link href="/"> Ambassador</Link>
          </li>
        </ul>
        <div>
          <a
            href="https://developers.bb.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center"
          >
            <img src="/logo_bb.jpg" alt="Logo BB" className="logo mt-2 w-8" />
          </a>
        </div>
      </nav>
    </div>
  );
};
