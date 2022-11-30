import Web3 from "web3";

let web3: any;
declare let window: any;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.ethereum);
  //   window.ethereum.enable();
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/5a13781fd9ac4756bb51d81e80f68552"
  );
  web3 = new Web3(provider);
}
export default web3;
