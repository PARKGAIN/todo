import * as dayjs from "dayjs";
import { useState } from "react";
import { BASEURL } from "../../constants/baseurl";
import { Todos } from "../../constants/types/type";
import Checkbox from "../Checkbox";
import DeleteTodoButton from "../Buttons/DeleteTodoButton";
import UpdateTodoButton from "../Buttons/UpdateTodoButton";
import UpdateTodoForm from "../UpdateTodoForm";
import { Item } from "./style";

const TodoItem = ({
  id,
  text,
  images,
  checked,
  createdAt,
  setTodos,
  todos,
}: Todos & {
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  todos: Todos[];
}) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return isUpdate ? (
    <UpdateTodoForm
      id={id}
      text={text}
      isCompleted={checked}
      images={images}
      setTodos={setTodos}
      setIsUpdate={setIsUpdate}
    />
  ) : (
    <Item>
      <Checkbox
        id={id}
        text={text}
        isCompleted={checked}
        images={images}
        setTodos={setTodos}
      />
      <span>{dayjs(createdAt).format("HH:mm:ss")}</span>
      <img src={BASEURL + `${images}`} height={40} alt={""} />
      <span>{text}</span>
      <div>
        <UpdateTodoButton setIsUpdate={setIsUpdate} />
        <DeleteTodoButton id={id} setTodos={setTodos} todos={todos} />
      </div>
    </Item>
  );
};

export default TodoItem;
