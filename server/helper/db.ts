/**
 * 数据库配置
 * @author: XiaoNing
 * @since:  2020/04/30
 * @update: 2020/05/04
 */
// const mysql = require("mysql");
// const mongoose = require('mongoose')
// import * as mysql from "mysql";

// require("mysql")
//连接数据库
// const db = mysql.createConnection({
//   // 主机地址
//   host: "127.0.0.1",
//   // 用户名
//   user: "",
//   // 密码
//   password: "",
//   // 数据库名
//   // database: "rout",
//   // 端口号
//   port:"27017",
// });
//得到数据库连接句柄
// var db = mongoose.connection;
// db.connect();

// module.exports = (sql: any, callback: any) => {
//   return new Promise((resolve, reject) => {
//     // db.query(sql, (err, data) => {
//     //   if (err) reject(err);
//     //   else resolve(data);
//     // });
//     db.on('open',function(err: any){
//       if(err){
//         console.log('数据库连接失败');
//         throw err;
//       }
//       console.log('数据库连接成功')
//     })
//   });
// };
