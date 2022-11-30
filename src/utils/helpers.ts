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
