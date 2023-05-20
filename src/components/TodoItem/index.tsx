import * as dayjs from "dayjs";
import { BASEURL } from "../../constants/baseurl";
import { Todos } from "../../constants/types/type";
import Checkbox from "../Checkbox";
import DeleteTodoButton from "../DeleteTodoButton";
import { Item } from "./style";

const TodoItem = ({
  id,
  text,
  images,
  checked,
  createdAt,
  setTodos,
}: Todos) => {
  return (
    <Item>
      <Checkbox
        id={id}
        text={text}
        isCompleted={checked}
        images={images}
        setTodos={setTodos}
      />
      <span>{dayjs(createdAt).format("HH:mm:ss")}</span>
      <img src={BASEURL + `${images}`} height={40} />
      <span>{text}</span>
      <button>수정</button>
      <DeleteTodoButton id={id} setTodos={setTodos} />
    </Item>
  );
};

export default TodoItem;
