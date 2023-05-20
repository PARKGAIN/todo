import { deleteTodo } from "../../apis/todo";
import { Todos } from "../../constants/types/type";
import { DeleteButton } from "./style";

const DeleteTodoButton = ({
  id,
  setTodos,
}: {
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}) => {
  return <DeleteButton onClick={() => deleteTodo(id)}>삭제</DeleteButton>;
};

export default DeleteTodoButton;
