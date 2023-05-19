import { axiosInstance, headers } from "../constants/axiosInstance";

export const loadTodos = async ()=>{ 
    try{
        const response =await axiosInstance.get('/todos',{headers:headers});
        const {message,todos}= response.data;
         return todos;
        } catch(error){
             console.error(error)
}}

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

export const createTodo= async (text:string, checked:boolean, images:string[]|null|File) => {
    try {
        const newTodo = {
            text: text,
            checked: checked,
            images: images
          };
        await axiosInstance.post('/todo',newTodo,{headers:headers})
    } catch (error) {
        console.error(error)
    }
}

export const updateTodo = async () => {
    try {
        await axiosInstance.put('/todo')
    } catch (error) {
        console.error(error)
    }
}

export const deleteTodo = async () => {
    try {
        await axiosInstance.delete('/todo')
    } catch (error) {
        console.error(error);
    }
}
