import Checkbox from "../Checkbox";
import { Item } from "./style";

const TodoItem = () => {
  return (
    <Item>
      <Checkbox />
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </Item>
  );
};

export default TodoItem;
