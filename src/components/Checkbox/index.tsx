import { updateTodo } from "../../apis/todo";
import { CheckboxProps } from "../../constants/types/type";
import { StyledCheckbox } from "./style";

const Checkbox = ({
  id,
  text,
  isCompleted,
  images,
  setTodos,
}: CheckboxProps) => {
  const toggleCheckbox = async (e: React.FormEvent<HTMLInputElement>) => {
    await updateTodo(id, text, e.currentTarget.checked, images);
  };

  return (
    <div>
      <StyledCheckbox
        type="checkbox"
        defaultChecked={isCompleted}
        onInput={toggleCheckbox}
      />
    </div>
  );
};

export default Checkbox;
