import { useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useState } from "react";

import {
  clearCoinbaseInfo,
  convertToEther,
  network,
  shorten,
} from "../../utils/helpers";
import CustomModal from "../customModal/CustomModal";
import {
  Address,
  Balance,
  ButtonWrapper,
  Chain,
  DisconnectButton,
  DisconnectModalContainer,
  DisconnectModalHeader,
  ModalCloseContainer,
} from "./DisconnectModal.style";
interface I_Disconnect {
  isModalOpen: boolean;
  setModalOpen(value: boolean): void;
}
const DisconnectModal = ({ isModalOpen, setModalOpen }: I_Disconnect) => {
  const [balance, setBalance] = useState("");
  const { account, chainId, deactivate, connector, library } = useWeb3React();

  const Disconnect = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("provider");
    }
    // clearCoinbaseInfo?.map((info: any) => {
    //   window.localStorage.removeItem(info);
    // });
    deactivate();
    setModalOpen(!isModalOpen);
    if (connector instanceof WalletConnectConnector) {
      connector.walletConnectProvider = undefined;
    }
  };

  const getBalance = async () => {
    if (library) {
      const result = await library.eth.getBalance(account);
      const convertEthValue = convertToEther(result);
      setBalance(convertEthValue);
    }
  };
  getBalance();

  return (
    <>
      <CustomModal setModalOpen={setModalOpen}>
        <DisconnectModalContainer>
          <DisconnectModalHeader>Disconnect</DisconnectModalHeader>
          <Balance>
            Balance : {balance && chainId && `${balance} ${network(chainId)}`}
          </Balance>
          <Address>Address : {account && shorten(account)}</Address>
          <Address>Network : {chainId && network(chainId)}</Address>
          <Chain>ChainID : {chainId && chainId}</Chain>
          <ButtonWrapper>
            <DisconnectButton onClick={Disconnect}>Disconnect</DisconnectButton>
          </ButtonWrapper>
          <ModalCloseContainer onClick={() => setModalOpen(!isModalOpen)}>
            X
          </ModalCloseContainer>
        </DisconnectModalContainer>
      </CustomModal>
    </>
  );
};

export default DisconnectModal;
