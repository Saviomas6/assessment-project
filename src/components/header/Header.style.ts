import styled from "styled-components";
export const HeaderMainLayout = styled.div`
  height: 50px;
  background-color: #dad3d1;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 180px;
  padding: 20px;
`;

export const HeaderLogoContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #000;
`;

export const HeaderButton = styled.button`
  height: 45px;
  width: 180px;
  outline: none;
  border: none;
  color: #fff;
  background-color: #000;
  font-size: 18px;
  font-weight: 600;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
