import React from "react";
import { ModalBodyContainer, ModalMainLayout } from "./CustomModal.style";
interface I_CustomModal {
  setModalOpen(value: boolean): void;
  children: React.ReactNode;
}
const CustomModal = ({ setModalOpen, children }: I_CustomModal) => {
  const handleOutSideClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setModalOpen(false);
    }
  };
  return (
    <ModalMainLayout onMouseDown={handleOutSideClick}>
      <ModalBodyContainer>{children}</ModalBodyContainer>
    </ModalMainLayout>
  );
};

export default CustomModal;
