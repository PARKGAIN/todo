import { useState } from "react";
import { createTodo } from "../../apis/todo";
import Button from "../Button";
import Modal from "../Modal";
import { StyledTextArea } from "./style";

interface AddTodoProps {
  show: boolean;
  onCloseModal: () => void;
}

const AddTodoModal = ({ show, onCloseModal }: AddTodoProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [text, setText] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleCreateTodo = async () => {
    if (!text) {
      alert("내용을 입력해주세요.");
      return;
    }
    const formData = new FormData();
    formData.append("text", text);
    if (file) {
      formData.append("file", file);
    }
    try {
      await createTodo(formData);
      onCloseModal();
    } catch (error) {
      console.error(error);
      alert("Todo 작성에 실패했습니다.");
    }
  };

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <h2>Todo List 작성하기</h2>
      <StyledTextArea
        placeholder="Todo List 작성"
        value={text}
        onChange={handleTextChange}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        id="img"
      />
      {previewUrl && <img src={previewUrl} alt="미리보기" />}
      <label htmlFor="img">사진 첨부하기</label>
      <Button onClick={handleCreateTodo}>작성완료</Button>
    </Modal>
  );
};

export default AddTodoModal;
