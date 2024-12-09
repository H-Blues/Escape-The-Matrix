import { defineChain } from "@reown/appkit/networks";

export const neox_mainnet = defineChain({
  id: 47763,
  caipNetworkId: "eip155:47763",
  chainNamespace: "eip155",
  name: "NeoX Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Gas",
    symbol: "GAS",
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet-1.rpc.banelabs.org"],
      webSocket: ["wss://mainnet.wss1.banelabs.org/"],
    },
  },
  blockExplorers: {
    default: { name: "NeoX Explorer", url: "https://xexplorer.neo.org" },
  },
});

export const neox_testnet = defineChain({
  id: 12227332,
  caipNetworkId: "eip155:12227332",
  chainNamespace: "eip155",
  name: "NeoX T4",
  nativeCurrency: {
    decimals: 18,
    name: "Gas",
    symbol: "GAS",
  },
  rpcUrls: {
    default: {
      http: ["https://neoxt4seed1.ngd.network"],
      webSocket: ["wss://neoxt4wss1.ngd.network"],
    },
  },
  blockExplorers: {
    default: { name: "NeoX Testnet Explorer", url: "https://xt4scan.ngd.network/" },
  },
});
