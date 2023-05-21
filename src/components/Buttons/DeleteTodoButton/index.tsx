import { deleteTodo } from "../../../apis/todo";
import { Todos } from "../../../constants/types/type";
import { DeleteButton } from "./style";

const DeleteTodoButton = ({
  id,
  setTodos,
  todos,
}: {
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  todos: Todos[];
}) => {
  const removedTodo = [...todos].filter((todo) => todo.id !== id);
  return (
    <DeleteButton
      onClick={() => {
        deleteTodo(id);
        setTodos(removedTodo);
      }}
    >
      삭제
    </DeleteButton>
  );
};

export default DeleteTodoButton;
