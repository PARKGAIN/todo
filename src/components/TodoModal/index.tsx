import Button from "../Button";
import Modal from "../Modal";
import { StyledTextArea } from "./style";

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const TodoModal = ({ show, onCloseModal }: Props) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <h2>Todo List 작성하기</h2>
      <StyledTextArea placeholder="Todo List 작성" />
      <Button>작성완료</Button>
    </Modal>
  );
};

export default TodoModal;
