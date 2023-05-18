import Modal from "../Modal";

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const TodoModal = ({ show, onCloseModal }: Props) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <div></div>
    </Modal>
  );
};

export default TodoModal;
