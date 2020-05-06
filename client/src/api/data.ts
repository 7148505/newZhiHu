import { expect } from 'chai';
import axios from "@/libs/api.request";

export const getUserList = (info: any) => {
  return axios.request({
    url: "index/api/userList",
    data: info,
    method: "get"
  });
};
export const userRegistration = (info: any) => {
  return axios.request({
    url: "index/api/register",
    data: info,
    method: "post"
  });
};
export const userLogin = (info: any) => {
  return axios.request({
    url: "index/api/login",
    data: info,
    method: "post"
  });
};



// import Api from '@/libs/api.request'

// export const getData = () => {
//   return Api.getData()
// }