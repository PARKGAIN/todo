import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('jwt');

export const loadTodos = async ()=>{ 
    try{
        const response =await axiosInstance.get('/todos');
         return response.data;
        } catch(error){
             console.error(error)
}}

export const createTodo= async () => {
    try {
        await axiosInstance.post('/todo')
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

axiosInstance.interceptors.request.use(req=>{
    const token =localStorage.getItem('jwt');
    const navigate= useNavigate();
    if(!token){
        navigate('/login')
    }
        return req;
})


