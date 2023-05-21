import { useState } from "react";
import { updateTodo } from "../../apis/todo";
import { CheckboxProps, Todos } from "../../constants/types/type";
import Checkbox from "../Checkbox";
import { DeleteButton } from "../Buttons/DeleteTodoButton/style";
import { Item } from "../TodoItem/style";
import { UpdateButton } from "../Buttons/UpdateTodoButton/style";
import { UpdateTodoFormInput } from "./style";

const UpdateTodoForm = ({
  id,
  isCompleted,
  setTodos,
  text,
  images,
  setIsUpdate,
}: CheckboxProps & {
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [newTodoText, setNewTodoText] = useState(text);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };
  const cancel = () => {
    setIsUpdate(false);
  };
  const onSubmitNewTodo = () => {
    updateTodo(id, newTodoText, isCompleted, images).then((data) => {
      if (data === "성공") {
        setIsUpdate(false);
        setTodos(updatedTodoList);
      } else if (data === "실패") {
        alert("todo를 수정하지 못했습니다");
      }
    });
  };
  const updatedTodoList = (todos: Todos[]) => {
    const index = todos.findIndex((prev) => prev.id === id);
    todos.splice(index, 1, {
      id: id,
      text: newTodoText,
      checked: isCompleted,
      images: images,
    });
    return [...todos];
  };

  return (
    <Item>
      <Checkbox
        id={id}
        isCompleted={isCompleted}
        setTodos={setTodos}
        text={text}
        images={images}
      />
      <UpdateTodoFormInput
        type="text"
        value={newTodoText}
        onChange={onChangeInput}
      />
      <div>
        <UpdateButton onClick={() => onSubmitNewTodo()}>제출</UpdateButton>
        <DeleteButton onClick={() => cancel()}>취소</DeleteButton>
      </div>
    </Item>
  );
};

export default UpdateTodoForm;
