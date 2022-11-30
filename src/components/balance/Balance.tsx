import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { contractAddress } from "../../blockchain/contracts/address";
import { tokenInstance } from "../../blockchain/contracts/instance";
import { web3 } from "../../blockchain/web3";
import { useState } from "react";
import { HeaderButton } from "../header/Header.style";
import { convertToEther, convertToWei } from "../../utils/helpers";
const Balance = () => {
  const { account } = useWeb3React();
  const [name, setName] = useState<string>("");
  const [convertWei, setConvertWei] = useState<string>("");

  //Qusetion No 3
  const withoutWalletConnect = async () => {
    try {
      let name = await tokenInstance.methods.name().call();
      setName(name);
      console.log(name);
    } catch (err) {
      console.error(err);
    }
  };

  withoutWalletConnect();

  //Qusetion No 4
  const sendOperation = async () => {
    try {
      let allowance = await tokenInstance.methods
        .allowance(account, contractAddress)
        .call();
      allowance = new BigNumber(allowance).dividedBy(10 ** 18);
      console.log(allowance.toString());
      await tokenInstance.methods
        .approve(contractAddress, "1000000000000000")
        .send({ from: account })
        .on("hash", (hash: any) => {
          alert(hash);
        })
        .on("receipt", (receipt: any) => {
          alert("successfully");
        })
        .on("error", (error: any, receipt: any) => {
          alert("failed");
        });
    } catch (err) {
      console.error(err);
    }
  };

  //Qusetion No 6
  const conversionToWei = (amount: string) => {
    const result = convertToWei(amount);
    return result;
  };

  //Qusetion No 6
  const conversionToEther = (amount: string) => {
    const result = convertToEther(amount);
    return result;
  };

  //Qusetion No 7
  const trackingStatus = async (hashValue: string) => {
    try {
      web3.eth.getTransactionReceipt(hashValue).then(function (events: any) {
        console.log(events);
        console.log(events.status);
      });
    } catch (err) {
      console.error(err);
    }
  };

  //Qusetion No 8
  const transfer = async (receiver: string, amount: number) => {
    try {
      const amountWei = new BigNumber(amount).multipliedBy(10 ** 18);
      await tokenInstance.methods
        .transfer(receiver, amountWei)
        .send({
          from: account,
        })
        .on("transactionHash", (hash: any) => {
          alert(hash);
        })
        .on("receipt", (receipt: any) => {
          console.log(receipt);

          alert("liquidity removed successfully");
        })
        .on("error", (error: any, receipt: any) => {
          console.log(error);

          alert("transaction failed");
        });
    } catch (err) {
      console.error(err);
    }
  };

  //Qusetion No 9
  const bigNumberOperation = (a: number, b: number) => {
    const left = new BigNumber(a).plus(b).pow(2);
    const right = new BigNumber(b).pow(2).plus(a - b);
    const res = left.dividedBy(right);
    return res.toString();
  };

  //Qusetion No 10
  const estimateGas = async () => {
    try {
      const estGas = await tokenInstance.methods
        .approve(contractAddress, "1000000000000000")
        .estimateGas({ from: account });
      console.log({ estGas });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>Name : {name}</div>
      <br />
      <HeaderButton onClick={sendOperation}>Send Operation</HeaderButton>
      <br />
      <div>{conversionToWei("2")}</div>
      <br />
      <div>{conversionToEther("4000000000000000000")}</div>
      <br />
      <HeaderButton
        onClick={() =>
          trackingStatus(
            "0xacaf274b1990dfc4f914238c1bfa1024a2957f7fe5d5c5232bb3b8ecc2ba1675"
          )
        }
      >
        Tracking Status
      </HeaderButton>
      <br />
      <HeaderButton
        onClick={() =>
          transfer(
            "0x08130f500b67a62Df9A2F90e28f4725c9816591B",
            1000000000000000000
          )
        }
      >
        Transfer
      </HeaderButton>
      <br />
      <HeaderButton onClick={estimateGas}>Estimate Gas</HeaderButton>
      <br />
      <div>{bigNumberOperation(200000000000000, 3000000000000)}</div>
    </div>
  );
};

export default Balance;
