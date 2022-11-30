import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { contractAddress } from "../../blockchain/contracts/address";
import { tokenInstance } from "../../blockchain/contracts/instance";
import { web3 } from "../../blockchain/web3";

const Balance = () => {
  const { account } = useWeb3React();

  //Qusetion No 3
  const withoutWalletConnect = async () => {
    try {
      let name = await tokenInstance.methods.name().call();
      console.log(name);
    } catch (err) {
      console.error(err);
    }
  };

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
    let toWei = new BigNumber(amount).multipliedBy(10 ** 18);
    console.log(toWei.toString());
  };

  //Qusetion No 6
  const conversionToEther = (amount: string) => {
    let toEth = new BigNumber(amount).dividedBy(10 ** 18);
    console.log(toEth.toString());
  };

  //Qusetion No 7
  const trackStatus = async (hash: string) => {
    try {
      web3.eth.getTransactionReceipt(hash).then(function (events: any) {
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
          alert("liquidity removed successfully");
        })
        .on("error", (error: any, receipt: any) => {
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
    console.log(res.toString());
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

  return <div></div>;
};

export default Balance;
