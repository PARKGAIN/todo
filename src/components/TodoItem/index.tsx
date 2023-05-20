import { Todos } from "../../constants/types/type";
import Checkbox from "../Checkbox";
import { Item } from "./style";

const TodoItem = ({ id, text, images, checked, createdAt }: Todos) => {
  id;
  text;
  images;
  checked;
  createdAt;
  return (
    <Item>
      <Checkbox />
    </Item>
  );
};

export default TodoItem;
