import { AddTodoProps } from "../../constants/interfaces/interfaces";
import Modal from "../Modal";

const UpdateTodoModal = ({ show, onCloseModal }: AddTodoProps) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <div>Todo List 수정하기 </div>
    </Modal>
  );
};

export default UpdateTodoModal;
