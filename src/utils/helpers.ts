import BigNumber from "bignumber.js";

export const shorten = (str: string) => {
  return `${str.toString().slice(0, 6)}...${str
    ?.toString()
    .slice(str.length - 4)}`;
};

export const convertToEther = (values: number | string) => {
  const convertToEther = new BigNumber(values).dividedBy(10 ** 18).toFixed(5);
  return convertToEther;
};

export const convertToWei = (values: number | string) => {
  const ConvertToWei = new BigNumber(values).multipliedBy(10 ** 18).toFixed();
  return ConvertToWei;
};

export const network = (chainID: number) => {
  if (chainID === 1) {
    return "Mainnet";
  } else if (chainID === 3) {
    return "Ropsten";
  } else if (chainID === 4) {
    return "Rinkeby";
  } else if (chainID === 5) {
    return "Goerli";
  } else if (chainID === 42) {
    return "Kovan";
  } else {
    return "UnSupported Network";
  }
};

export const checkMetamask = () => {
  if (typeof window !== "undefined") {
    const { ethereum } = window as any;
    if (ethereum?.isMetaMask) {
      return true;
    } else {
      return false;
    }
  }
};

export const clearCoinbaseInfo = [
  "-walletlink:https://www.walletlink.org:version",
  "-walletlink:https://www.walletlink.org:session:id",
  "-walletlink:https://www.walletlink.org:session:secret",
  "-walletlink:https://www.walletlink.org:session:linked",
  "-walletlink:https://www.walletlink.org:walletUsername",
  "-walletlink:https://www.walletlink.org:AppVersion",
  "-walletlink:https://www.walletlink.org:DefaultJsonRpcUrl",
  "-walletlink:https://www.walletlink.org:DefaultChainId",
  "-walletlink:https://www.walletlink.org:Addresses",
];
