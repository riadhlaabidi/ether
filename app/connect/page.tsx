"use client";

import { useRouter } from "next/navigation";
import { Connector, useConnect } from "wagmi";

export default function Connect() {
  const { connect, connectors, error } = useConnect();
  const router = useRouter();

  function handleConnect(connector: Connector) {
    connect(
      { connector: connector },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: () => {},
      }
    );
  }

  return (
    <div className="md:border md:border-zinc-500 rounded-xl px-6 md:px-16 py-14 mt-20">
      <h1 className="text-2xl font-semibold">Connect your wallet</h1>
      <p className="mt-3 text-zinc-400">
        Choose a wallet provider to connect with.
      </p>
      <div className="flex flex-col gap-2 mt-12">
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            className="flex items-center justify-center gap-2 px-4 py-2 font-medium w-full bg-[#cd6116] rounded-md disabled:bg-[#cd6116] disabled:bg-opacity-50"
            onClick={() => handleConnect(connector)}
          >
            {connector.icon && (
              <img src={connector.icon} alt="icon" height={24} width={24} />
            )}
            Connect with {connector.name}
          </button>
        ))}
      </div>

      {error && error.name === "UserRejectedRequestError" && (
        <p className="text-red-500 mt-2 text-center">
          Connection rejected. Please try again !
        </p>
      )}
    </div>
  );
}
