import styled from "styled-components";

export const ModalHeader = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: #000;
`;
export const WalletMainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 60px);
  grid-gap: 15px;
  margin-top: 20px;
`;
export const WalletContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  cursor: pointer;
`;

export const WalletLogoContainer = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WalletText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;
export const ModalCloseContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
