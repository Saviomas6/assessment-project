import {
  ModalCloseContainer,
  ModalHeader,
  WalletContainer,
  WalletLogoContainer,
  WalletMainLayout,
  WalletText,
} from "./WalletModal.style";
import metamask from "../../assets/images/metamask.svg";
import walletConnectLogo from "../../assets/images/walletConnectLogo.svg";
import coinbaseLogo from "../../assets/images/coinbaseLogo.svg";
import { useWeb3React } from "@web3-react/core";
import { connectors, Injected } from "../../utils/connector";
import CustomModal from "../customModal/CustomModal";
interface I_WalletModal {
  isModalOpen: boolean;
  setModalOpen(value: boolean): void;
}
const WalletModal = ({ isModalOpen, setModalOpen }: I_WalletModal) => {
  const { activate } = useWeb3React();

  const setProvider = (type: string) => {
    window.localStorage.setItem("provider", type);
  };

  return (
    <CustomModal setModalOpen={setModalOpen}>
      <div>
        <ModalHeader>Connect a wallet</ModalHeader>
        <WalletMainLayout>
          <WalletContainer
            onClick={() => {
              activate(connectors?.injected);
              setProvider("injected");
              setModalOpen(false);
            }}
          >
            <WalletLogoContainer>
              <img src={metamask} alt="metamask" />
            </WalletLogoContainer>
            <WalletText>MetaMask</WalletText>
          </WalletContainer>

          <WalletContainer
            onClick={() => {
              activate(connectors?.walletConnect);
              setProvider("walletConnect");
              setModalOpen(false);
            }}
          >
            <WalletLogoContainer>
              <img src={walletConnectLogo} alt="metamask" />
            </WalletLogoContainer>
            <WalletText>Wallet Connect</WalletText>
          </WalletContainer>

          <WalletContainer
            onClick={() => {
              activate(connectors?.coinbaseWallet);
              setProvider("coinbaseWallet");
              setModalOpen(false);
            }}
          >
            <WalletLogoContainer>
              <img src={coinbaseLogo} alt="metamask" />
            </WalletLogoContainer>
            <WalletText>Coinbase</WalletText>
          </WalletContainer>

          <ModalCloseContainer onClick={() => setModalOpen(!isModalOpen)}>
            X
          </ModalCloseContainer>
        </WalletMainLayout>
      </div>
    </CustomModal>
  );
};

export default WalletModal;
