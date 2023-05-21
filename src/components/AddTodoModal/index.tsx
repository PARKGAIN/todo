import { useState, useEffect } from "react";
import { createTodo, uploadImages } from "../../apis/todo";
import { AddTodoProps, Todos } from "../../constants/types/type";
import Button from "../Buttons";
import Modal from "../Modal";
import { AddImgLabel, ImgInput, StyledTextArea } from "./style";

const AddTodoModal = ({
  show,
  onCloseModal,
  setTodos,
  todos,
}: AddTodoProps) => {
  const [text, setText] = useState("");
  const [imgFiles, setImgFiles] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [id, setId] = useState<number>();

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
    imgFiles
      ? uploadImages(imgFiles).then((data) => {
          setImageUrls(data);
        })
      : setImageUrls([]);
  }, [imgFiles]);

  const onSubmitTodo = () => {
    if (!text) {
      alert("내용을 입력해주세요.");
      return;
    }
    createTodo(text, false, imageUrls).then((id) => {
      setId(id);
    });
    setTodos([
      ...todos,
      { id: id!, text: text, checked: false, images: imageUrls },
    ] as Todos[]);
    onCloseModal();
    setText("");
    setPreviewImg(null);
  };

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <span onClick={onCloseModal}>X</span>
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
        <div>
          <img width={200} height={250} src={previewImg} alt="미리보기" />
          <label htmlFor="img">사진 변경</label>
          <button
            onClick={() => {
              setPreviewImg(null);
              setImgFiles(null);
            }}
          >
            사진 지우기
          </button>
        </div>
      )}
      {!previewImg && (
        <div>
          <AddImgLabel htmlFor="img">사진 첨부하기</AddImgLabel>
        </div>
      )}
      <Button onClick={onSubmitTodo}>작성완료</Button>
    </Modal>
  );
};

export default AddTodoModal;
