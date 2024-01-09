import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full mt-28 px-16">
      <h1 className="text-6xl font-bold">Ether demo</h1>
      <p className="text-2xl text-zinc-300 font-light mt-4">
        Seamlessly Send Tokens with Ease on Our Decentralized App
      </p>
      <Link
        className="inline-block mt-8 px-4 py-2 font-medium rounded-md bg-[#cd6116] hover:bg-orange-500"
        href={"/connect"}
      >
        Connect your wallet
      </Link>
    </div>
  );
}
