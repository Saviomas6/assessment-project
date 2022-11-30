import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/5a13781fd9ac4756bb51d81e80f68552`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
  // @ts-ignore
  rpcUrl: `https://mainnet.infura.io/v3/5a13781fd9ac4756bb51d81e80f68552`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  supportedChainIds: [1, 3, 4, 5, 42],
});
export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const connectors = {
  injected: Injected,
  walletConnect: WalletConnect,
  coinbaseWallet: CoinbaseWallet,
};
