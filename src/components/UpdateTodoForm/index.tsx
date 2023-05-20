import { useState } from "react";
import { updateTodo } from "../../apis/todo";
import { CheckboxProps } from "../../constants/types/type";
import { ImgInput } from "../AddTodoModal/style";
import Checkbox from "../Checkbox";
import { DeleteButton } from "../DeleteTodoButton/style";
import { Item } from "../TodoItem/style";
import { UpdateButton } from "../UpdateTodoButton/style";

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
  const [newTodoText, setNewTodoText] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };
  const cancel = () => {
    setIsUpdate(false);
  };
  const onSubmitNewTodo = () => {
    updateTodo(id, newTodoText, isCompleted, images).then((data) => {
      if (data === "실패") {
        alert("todo 수정에 실패하였습니다");
      }
    });
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
      <ImgInput type="file" defaultValue={images} />
      <input type="text" value={newTodoText} onChange={onChangeInput} />
      <UpdateButton onClick={() => onSubmitNewTodo()}>제출</UpdateButton>
      <DeleteButton onClick={() => cancel}>취소</DeleteButton>
    </Item>
  );
};

export default UpdateTodoForm;
