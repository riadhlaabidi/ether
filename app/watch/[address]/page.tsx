"use client";

import { formatBalance } from "@/app/lib/balance";
import { erc20Abi } from "viem";
import { useReadContracts } from "wagmi";

export default function Watch({ params }: { params: { address: string } }) {
  const { address } = params as { address: `0x${string}` };
  const { data } = useReadContracts({
    contracts: [
      {
        address: address,
        abi: erc20Abi,
        functionName: "symbol",
      },
      {
        address: address,
        abi: erc20Abi,
        functionName: "name",
      },
      {
        address: address,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [address],
      },
    ],
  });

  return (
    <div className="md:border md:border-zinc-500 rounded-xl px-6 md:px-16 py-14 mt-20">
      <h1 className="text-xl font-semibold">Token contract information</h1>
      {data && (
        <>
          <p>
            <span className="text-zinc-400">Name</span> {data?.[1]?.result}
          </p>
          <small className="text-base text-zinc-200">Balance</small>

          <p className="font-semibold text-4xl">
            {formatBalance(data?.[2]?.result!)} {data?.[0].result}
          </p>
        </>
      )}
    </div>
  );
}
