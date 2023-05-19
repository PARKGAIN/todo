import { useState, useEffect } from "react";
import { createTodo, uploadImages } from "../../apis/todo";
import { AddTodoProps } from "../../constants/interfaces/interfaces";
import Button from "../Button";
import Modal from "../Modal";
import { ImgInput, StyledTextArea } from "./style";

const AddTodoModal = ({ show, onCloseModal }: AddTodoProps) => {
  const [text, setText] = useState("");
  const [imgFiles, setImgFiles] = useState<File | null>(null);
  const [checked, setChecked] = useState(false);
  const [previewImg, setPreviewImg] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImgFiles(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImg(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    if (imgFiles) {
      uploadImages(imgFiles).then((data) => {
        console.dir(data);
      });
    }
  }, [imgFiles]);

  const handleCreateTodo = async () => {
    if (!text) {
      alert("내용을 입력해주세요.");
      return;
    }
    try {
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
      <ImgInput
        type="file"
        accept="img/*"
        onChange={handleFileChange}
        id="img"
      />
      {previewImg && (
        <img width={200} height={250} src={previewImg} alt="미리보기" />
      )}
      <label htmlFor="img">사진 첨부하기</label>
      <Button onClick={handleCreateTodo}>작성완료</Button>
    </Modal>
  );
};

export default AddTodoModal;
