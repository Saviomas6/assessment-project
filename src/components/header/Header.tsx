import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from "react";
import { connectors } from "../../utils/connector";
import { shorten } from "../../utils/helpers";
import DisconnectModal from "../disconnectModal/DisconnectModal";
import WalletModal from "../walletModal/WalletModal";
import {
  HeaderButton,
  HeaderLogoContainer,
  HeaderMainLayout,
} from "./Header.style";

const Header = () => {
  const { activate, active, account } = useWeb3React();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isDisConnectModalOpen, setDisConnectModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    // @ts-ignore
    if (provider) activate(connectors[provider]);
  }, []);
  return (
    <>
      <HeaderMainLayout>
        <HeaderLogoContainer>Assessment</HeaderLogoContainer>
        {active ? (
          <HeaderButton
            onClick={() => setDisConnectModalOpen(!isDisConnectModalOpen)}
          >
            {account && shorten(account)}
          </HeaderButton>
        ) : (
          <HeaderButton onClick={() => setModalOpen(!isModalOpen)}>
            Connect Wallet
          </HeaderButton>
        )}
      </HeaderMainLayout>
      {isModalOpen && (
        <WalletModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      )}
      {isDisConnectModalOpen && (
        <DisconnectModal
          isModalOpen={isDisConnectModalOpen}
          setModalOpen={setDisConnectModalOpen}
        />
      )}
    </>
  );
};

export default Header;
