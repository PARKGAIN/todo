import axios from "axios";
import { BASEURL } from "./baseurl";

export const axiosInstance = axios.create({baseURL:BASEURL})

export const headers = {
    'accesstoken': localStorage.getItem('jwt')
  };
