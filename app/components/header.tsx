"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";

export default function Header() {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  function handleDisconnect() {
    disconnect();
    router.push("/");
  }

  return (
    <header className="flex justify-between items-center w-full px-4 py-6 md:w-2/3 m-auto">
      <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={50}
          height={50}
        >
          <path fill="#3C3C3B" d="m256 362v107l131-185z" />
          <path fill="#343434" d="m256 41l131 218-131 78-132-78" />
          <path fill="#8C8C8C" d="m256 41v158l-132 60m0 25l132 78v107" />
          <path fill="#141414" d="m256 199v138l131-78" />
          <path fill="#393939" d="m124 259l132-60v138" />
        </svg>
      </Link>
      <div className="flex items-center gap-2">
        {isConnected ? (
          <>
            <Link href={"/send"} className="px-4 py-2 bg-zinc-600 rounded-md">
              Send
            </Link>
            <button
              className="px-4 py-2 bg-zinc-600 rounded-md"
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </>
        ) : (
          <Link href={"/connect"} className="px-4 py-2 bg-zinc-600 rounded-md">
            Connect
          </Link>
        )}
      </div>
    </header>
  );
}
