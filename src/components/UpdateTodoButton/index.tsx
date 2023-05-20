import { UpdateButton } from "./style";

const UpdateTodoButton = ({
  setIsUpdate,
}: {
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return <UpdateButton onClick={() => setIsUpdate(true)}>수정</UpdateButton>;
};

export default UpdateTodoButton;
