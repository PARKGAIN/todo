import Button from "../Button";
import Checkbox from "../Checkbox";
import { Item } from "./style";

const TodoItem = () => {
  return (
    <Item>
      <Checkbox />
      <Button>수정</Button>
      <Button>삭제</Button>
    </Item>
  );
};

export default TodoItem;
