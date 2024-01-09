import { http, createConfig, createStorage, cookieStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  ssr: true,
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },

  // use cookie storage to avoid waiting for the store to be hydrated
  // in SSR in order to show the user's data.
  storage: createStorage({
    storage: cookieStorage,
  }),

  connectors: [metaMask()],

  // disable multi injected provider discovery
  multiInjectedProviderDiscovery: false,
});
