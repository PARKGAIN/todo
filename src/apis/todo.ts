import { axiosInstance, headers } from "../constants/axiosInstance";

export const loadTodos = async ()=>{ 
  try{
      const response =await axiosInstance.get('/todos',{headers:headers});
      const {message,todos}= response.data;

      if(message ==='성공'){
        return todos;
      } else if(message==='실패'){
        alert('todo list를 불러오는데 실패하였습니다.')
      }
  } catch(error){
    console.error(error);
  }
}

export const uploadImages = async ( images: File) => {
    try {
      const imageheader = {
        'accesstoken': localStorage.getItem('jwt'),
        'Content-Type': 'multipart/form-data'
      };
        const formData = new FormData();
        formData.append('images', images);
        const response =await axiosInstance.post('/images',formData,{headers:imageheader});
        const {message, imageUrls}= response.data;

        if(message ==='성공'){
          return imageUrls;
        } else if(message==='실패'){
          alert('이미지를 등록하는데 실패하였습니다')
        }
    } catch (error) {
      console.error(error);
    }
};

export const createTodo= async (text:string, checked:boolean, images:string[]) => {
    try {
        const newTodo = {
            text: text,
            checked: checked,
            images: images
          };
        const response =await axiosInstance.post('/todo',newTodo,{headers:headers})
        const {id,message}= response.data;

        if(message==='실패'){
            alert('todo 저장에 실패하였습니다.')
        }else if(message ==='성공') {
          return id;
        }

    } catch (error) {
      console.error(error);
    }
}

export const updateTodo = async (id:number,text:string, checked:boolean, images:string[]|undefined) => {
  console.log(id);
    try {
      const newTodo= {
        text:text,
        checked:checked,
        images: images
      }
      const response=  await axiosInstance.put(`/todo/${id}`,newTodo,{headers:headers});
      const {message}= response.data;
      return message;
    } catch (error) {
      console.error(error);
    }
}

export const deleteTodo = async (id:number) => {
    try {
        const response =await axiosInstance.delete(`/todo/${id}`,{headers:headers});
        const {message}= response.data;
        return message;
    } catch (error) {
      console.error(error);
    }
}
