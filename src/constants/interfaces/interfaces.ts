import { ReactNode } from "react";

export interface AddTodoProps {
    show: boolean;
    onCloseModal: () => void;
  }

 export interface ModalProps {
    show: boolean;
    onCloseModal: () => void;
    children: ReactNode;
  }