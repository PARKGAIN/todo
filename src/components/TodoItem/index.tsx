import { Todos } from "../../constants/types/type";
import Checkbox from "../Checkbox";
import { Item } from "./style";

const TodoItem = (todos: Todos[]) => {
  return (
    <Item>
      <Checkbox />
    </Item>
  );
};

export default TodoItem;
