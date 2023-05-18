import { AxiosError } from "axios";
import { UserInput } from "../types/type";
import { axiosInstance } from "../utils/axiosInstance";

export const login = async (userInput:UserInput) => {
    try{
        const response= await axiosInstance.post('/login',userInput)
        const {message,token}= response.data;
        if (message === '성공' && token) {
            localStorage.setItem('jwt', token);
            console.log('로그인 성공');
          } else {
            console.log('로그인 실패');
          }
    }catch(error){

        console.error(error);

        if (error instanceof AxiosError) {
            if (error?.response?.status === 401) {
              alert('잘못된 비밀번호입니다. 다시 확인해주세요.');
            } else if (error?.response?.status === 404) {
              alert('존재하지 않는 이메일입니다.');
            } else alert('로그인에 실패했습니다. 다시 시도해주세요.');
          }
        }
}

export const signup= async(userInput:UserInput)=>{
    try {
        const response =await axiosInstance.post('/signup',userInput);
        const {message}= response.data;
        if (message === '성공' ) {
            console.log('회원가입 성공');
          } else {
            console.log('회원가입 실패');
          }
    } catch (error) {
        console.error(error)
    }
}