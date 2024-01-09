import { erc20Abi } from "viem";
import { useReadContracts } from "wagmi";
import Loader from "./loader";
import { formatBalance } from "../lib/balance";

export default function Contract({ address }: { address: `0x${string}` }) {
  const erc20Contract = {
    address: address,
    abi: erc20Abi,
  } as const;

  const { data, isPending, isSuccess } = useReadContracts({
    contracts: [
      {
        ...erc20Contract,
        functionName: "symbol",
      },
      {
        ...erc20Contract,
        functionName: "name",
      },
      {
        ...erc20Contract,
        functionName: "balanceOf",
        args: [address],
      },
    ],
  });

  const [symbol, name, balance] = data || [];

  if (isSuccess && (symbol?.error || name?.error || balance?.error)) {
    return (
      <p className="mt-4  text-amber-600 text-lg">
        Contract not found ! Please verify address.
      </p>
    );
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mt-10 bg-zinc-600/30 p-8 rounded-lg">
      <h1 className="text-2xl font-semibold">Contract information</h1>
      {data && (
        <div className="mt-8">
          <span className="text-zinc-400 font-normal">Name</span>
          <p className="font-semibold"> {name?.result}</p>
          <span className="text-base text-zinc-400 mt-4 inline-block">
            Balance
          </span>
          <p className="font-semibold text-xl">
            {formatBalance(balance?.result!)} {symbol?.result}
          </p>
        </div>
      )}
    </div>
  );
}
