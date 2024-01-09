"use client";

import { useState } from "react";
import { parseEther } from "viem";
import {
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import Loader from "../components/loader";
import Link from "next/link";

export default function Send() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const {
    data: hash,
    sendTransaction,
    isPending,
    error,
  } = useSendTransaction();

  // Wait for transaction to be mined
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function handleTransaction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendTransaction({
      to: address as `0x${string}`,
      value: parseEther(amount),
    });
  }

  return (
    <>
      <div className="w-full lg:w-[70%] mt-20 ml-4">
        <Link
          href={"/dashboard"}
          className="font-semibold hover:text-orange-500 text-lg text-zinc-300"
        >
          ← Back
        </Link>
      </div>
      <div className="w-full lg:w-[70%] md:border md:border-zinc-500 rounded-xl px-6 md:px-16 py-14 mt-4">
        <h2 className="text-2xl font-semibold">Send tokens</h2>
        <form
          action=""
          className="flex flex-col w-full gap-5 mt-8"
          onSubmit={handleTransaction}
        >
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="adress">
              Send to
            </label>
            <input
              id="address"
              className="w-full px-4 py-2 bg-transparent border border-zinc-600 rounded-lg outline-none"
              type="text"
              placeholder="Enter recipient's address (0x...)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="adress">Amount</label>
            <input
              className="w-full px-4 py-2 bg-transparent border border-zinc-600 rounded-lg outline-none"
              type="text"
              pattern="^[0-9]*\.?[0-9]*$"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button
            disabled={isPending}
            className="px-4 py-2 bg-zinc-600 rounded-lg"
            type="submit"
          >
            {isPending ? <Loader /> : "Send"}
          </button>
          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {error && (
            <p className="text-amber-500">
              Error: {(error as BaseError).shortMessage || error.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
