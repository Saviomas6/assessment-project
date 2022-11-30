import styled from "styled-components";
export const ModalMainLayout = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000 !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  overflow: hidden;
`;

export const ModalBodyContainer = styled.div`
  background-color: #9f928b;
  color: #000;
  height: 300px;
  width: 360px;
  border-radius: 10px;
  padding: 15px;
  position: relative;
`;
