"use client";

import { useState } from "react";

export default function Send() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full md:w-1/2">
      <form action="" className="flex flex-col w-full gap-5">
        <div className="flex flex-col gap-2">
          <label className="" htmlFor="adress">
            Send to
          </label>
          <input
            id="address"
            className="w-full px-4 py-2 bg-transparent border border-zinc-600 rounded-lg"
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="adress">Amount</label>
          <input
            className="w-full px-4 py-2 bg-transparent border border-zinc-600 rounded-lg"
            type="text"
            pattern="^[0-9]*\.?[0-9]*$"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="px-4 py-2 bg-zinc-600 rounded-lg" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
