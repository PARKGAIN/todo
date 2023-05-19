import { axiosInstance } from "../utils/axiosInstance";


axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('jwt');

export const loadTodos = async ()=>{ 
    try{
        const response =await axiosInstance.get('/todos');
        const {message,todos}= response.data;
         return todos;
        } catch(error){
             console.error(error)
}}

export const createTodo= async (newTodo:any) => {
    try {
        await axiosInstance.post('/todo',newTodo)
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

// axiosInstance.interceptors.request.use(req=>{
//     const token =localStorage.getItem('jwt');
//     const navigate= useNavigate();
//     if(!token){
//         navigate('/login')
//     }
//         return req;
// })
// 이 부분 삭제할까?
