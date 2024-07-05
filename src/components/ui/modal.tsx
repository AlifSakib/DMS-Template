import { useState, ReactNode } from "react";
import { Modal } from "rizzui";

interface ReusableModalProps {
  isOpen: boolean;
  size?: "sm" | "lg";
  onClose: () => void;
  children: ReactNode;
}

const ReusableModal = ({
  isOpen,
  size = "sm",
  onClose,
  children,
}: ReusableModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      overlayClassName="backdrop-blur"
      containerClassName="!rounded-none p-4"
    >
      {children}
    </Modal>
  );
};

export default ReusableModal;
