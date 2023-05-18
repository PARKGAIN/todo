import { axiosInstance } from "../utils/axiosInstance";

axiosInstance.interceptors.request.use(req=>{
    const token =localStorage.getItem('accessToken');
if (token){
    req.headers.Authorization=`Bearer ${token}`
}
     return req;
})