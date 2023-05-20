import { AxiosError } from "axios";
import { UserInput } from "../constants/types/type";
import { axiosInstance } from "../constants/axiosInstance";

export const login = async (userInput:UserInput) => {
    try{
        const response= await axiosInstance.post('/login',userInput)
        const {message,token}= response.data;
        if (message === '성공' && token) {
            localStorage.setItem('jwt', token);
          } else {
            alert('로그인에 실패하였습니다')
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
            alert('다시 회원가입 해주세요.');
          }
    } catch (error) {
        console.error(error);
        if (error instanceof AxiosError) {
          if (error?.response?.status === 403) {
            alert('다시 회원가입 해주세요.');
          }
        }
    }
}