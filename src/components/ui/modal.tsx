import { useState, ReactNode } from "react";
import { Modal } from "rizzui";

interface ReusableModalProps {
  isOpen: boolean;
  size?: "sm" | "lg" | "md" | "full" | "xl";
  onClose: () => void;
  children: ReactNode;
}

const ReusableModal = ({
  isOpen,
  size = "sm",
  onClose,
  children,
}: ReusableModalProps) => {
  const handleClose = (e: React.MouseEvent) => {
    // Prevent closing on backdrop click
    if (e.target === e.currentTarget) {
      return;
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      // @ts-ignore
      onClose={handleClose}
      size={size}
      overlayClassName="backdrop-blur"
      containerClassName="!rounded-none p-4 min-w-[800px] "
    >
      {children}
    </Modal>
  );
};

export default ReusableModal;
