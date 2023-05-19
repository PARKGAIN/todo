import axios from "axios";

export const axiosInstance = axios.create({baseURL:'http://ec2-43-201-61-254.ap-northeast-2.compute.amazonaws.com'})

export const headers = {
    'accesstoken': localStorage.getItem('jwt')
  };
