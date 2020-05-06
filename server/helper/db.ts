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
// mongo  &&  mysql 对比



// mongo                    // mysql
// 第一级：数据库
// database                 // database

// 第二级：所有集合         所有表
// collections              // tables

// 第三级：单个集合         单个表
// collection               // table

// 第四级：数据
// { "_id" : ObjectId("58d0c3f6b87b6f1bccc055dc"),"title" : "肖申克的救赎"}
module.exports = {
    mongodb: "mongodb://localhost:27017/usertest"
}