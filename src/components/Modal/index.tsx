import { useCallback } from "react";
import { ModalProps } from "../../constants/types/type";
import { CreateModal, CloseModalButton } from "./style";

const Modal = ({ show, children, onCloseModal }: ModalProps) => {
  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal} />
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
