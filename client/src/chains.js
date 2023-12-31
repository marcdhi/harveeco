import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import * as chain from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

// All of the chains configured below are supported by Tableland
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    chain.scrollSepolia,
    chain.filecoinCalibration,
    chain.mainnet,
    chain.goerli,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    chain.arbitrumGoerli,
    chain.sepolia,
    chain.polygonMumbai,
    chain.optimismGoerli,
    chain.hardhat,
  ],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "" }), // Set up an Alchemy account: https://www.alchemy.com/
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "TESTING Starter",
  chains,
  projectId: "da766262c93ccbbdef65e546c2a6027f" ?? "", // Set up a WalletConnect account: https://walletconnect.com/
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
