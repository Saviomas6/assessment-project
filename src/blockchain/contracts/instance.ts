import contractAbi from "./abi/abi.json";
import { web3 } from "../web3";
import { contractAddress } from "./address";

export const tokenInstance = new web3.eth.Contract(
  contractAbi.abi,
  contractAddress
);
