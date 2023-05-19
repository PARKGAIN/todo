import Checkbox from "../Checkbox";
import { Item } from "./style";

const TodoItem = () => {
  return (
    <Item>
      <Checkbox />
      <button>수정</button>
      <button>삭제</button>
    </Item>
  );
};

export default TodoItem;
