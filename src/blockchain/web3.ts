import Web3 from "web3";

export let provider =
  "https://goerli.infura.io/v3/5a13781fd9ac4756bb51d81e80f68552";
export const web3: any = new Web3(provider || Web3.givenProvider);
