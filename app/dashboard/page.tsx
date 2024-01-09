"use client";

import { useState } from "react";
import { useAccount, useBalance, useEnsAvatar, useEnsName } from "wagmi";
import { formatBalance } from "../lib/balance";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const [watchAddress, setWatchAddress] = useState("");
  const balance = useBalance({
    address: address,
  });
  const router = useRouter();

  function handleWatchAddress(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/watch/${watchAddress}`);
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-3 items-center overflow-hidden">
        {ensAvatar ? (
          <img
            alt="avatar"
            src={ensAvatar}
            width={48}
            className="rounded-full"
          />
        ) : (
          <div className="rounded-full w-12 h-12 bg-zinc-600"></div>
        )}
        <p className="text-sm md:text-base inline text-center border border-zinc-500 px-3 md:px-5 py-2 rounded-full">
          {address}
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <small className="text-base  text-zinc-200">Balance</small>
        <p className="mt-1 text-4xl leading-snug font-semibold">
          {balance.data && (
            <span>
              {formatBalance(balance.data.value)} {balance.data.symbol}
            </span>
          )}
        </p>
        <div className="md:border md:border-zinc-500 md:rounded-xl px-6 md:px-16 py-14 mt-20 border-t border-zinc-600">
          <h2 className="text-2xl font-semibold">Read a token contract</h2>
          <p className="text-zinc-400 mb-8 mt-3">
            Enter token contract address to read information
          </p>
          <form onSubmit={handleWatchAddress} className="flex gap-2">
            <input
              className="w-full px-4 py-2 bg-transparent border border-zinc-600 rounded-lg"
              type="text"
              value={watchAddress}
              onChange={(e) => setWatchAddress(e.target.value)}
            />
            <button className="px-4 py-2 bg-zinc-600 rounded-lg" type="submit">
              Read
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
