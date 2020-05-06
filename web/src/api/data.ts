import axios from "@/libs/api.request";

export const saveErrorLogger = (info: any) => {
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
