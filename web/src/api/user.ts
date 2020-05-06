import axios from '@/libs/api.request'

// export const login = ({ userName, password }) => {
//   const data = {
//     userName,
//     password
//   }
//   return axios.request({
//     url: 'login',
//     data,
//     method: 'post'
//   })
// }

// export const getUserInfo = (token) => {
//   return axios.request({
//     url: 'get_info',
//     params: {
//       token
//     },
//     method: 'get'
//   })
// }

// export const hasRead = msg_id => {
//   return axios.request({
//     url: 'message/has_read',
//     method: 'post',
//     data: {
//       msg_id
//     }
//   })
// }