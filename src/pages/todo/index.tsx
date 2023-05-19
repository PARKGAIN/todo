import { useEffect, useState, useCallback } from "react";
import { loadTodos } from "../../apis/todo";
import AddTodoModal from "../../components/AddTodoModal";
import Button from "../../components/Button";

const TodoPage = () => {
  useEffect(() => {
    showTodos;
  }, []);
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const onClickAddTodoModal = useCallback(() => {
    setShowAddTodoModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowAddTodoModal(false);
  }, []);
  const showTodos = async () => {
    await loadTodos().then((data) => {
      console.dir(data);
    });
  };
  return (
    <div>
      <Button onClick={onClickAddTodoModal}>Todo List 작성하기</Button>
      <AddTodoModal show={showAddTodoModal} onCloseModal={onCloseModal} />
    </div>
  );
};

export default TodoPage;
