import { axiosInstance } from "../utils/axiosInstance";

axiosInstance.interceptors.request.use(req=>{
    const token =localStorage.getItem('jwt');
if (token){
    req.headers.Authorization=`${token}`
}
     return req;
})