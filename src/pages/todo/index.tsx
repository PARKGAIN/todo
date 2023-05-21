import { useEffect, useState, useCallback } from "react";
import { loadTodos } from "../../apis/todo";
import AddTodoModal from "../../components/AddTodoModal";
import { TodoListHeaderText } from "../../components/AuthForm/style";
import Button from "../../components/Buttons";
import TodoItem from "../../components/TodoItem";
import { Todos } from "../../constants/types/type";
import { TodoPageContainer } from "./style";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  useEffect(() => {
    showTodos();
  }, []);

  const [showAddTodoModal, setShowAddTodoModal] = useState(false);

  const onClickAddTodoModal = useCallback(() => {
    setShowAddTodoModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowAddTodoModal(false);
  }, []);

  const showTodos = () => {
    loadTodos().then((data) => {
      setTodos(data);
    });
  };

  return (
    <TodoPageContainer>
      <TodoListHeaderText>Todo List</TodoListHeaderText>
      <Button onClick={onClickAddTodoModal}>Todo List 작성하기</Button>
      {todos ? (
        todos.map(({ id, text, images, checked, createdAt }) => {
          return (
            <TodoItem
              id={id}
              text={text}
              images={images}
              checked={checked}
              createdAt={createdAt}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })
      ) : (
        <div>todo를 작성해주세요</div>
      )}
      <AddTodoModal
        show={showAddTodoModal}
        onCloseModal={onCloseModal}
        todos={todos}
        setTodos={setTodos}
      />
    </TodoPageContainer>
  );
};

export default TodoPage;
