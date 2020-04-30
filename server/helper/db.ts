/**
 * 数据库配置
 * @author: XiaoNing
 * @since:  2020/04/30
 */
const mysql = require("mysql");
// import * as mysql from "mysql";

// require("mysql")

const db = mysql.createConnection({
  // 主机地址
  host: "127.0.0.1",
  // 用户名
  user: "root",
  // 密码
  password: "7148505",
  // 数据库名
  database: "rout",
  // 端口号
  // port:"",
});

db.connect();

module.exports = (sql, callback) => {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
