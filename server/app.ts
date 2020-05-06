/**
 * 链接数据库相关
 * @author: XiaoNing
 * @since:  2020/05/04
 * @update: 2020/05/04
 */

// import * as express from "express";
import express from "express";
// import express = require("express");
import bodyParser from "body-parser";
// import bodyParser = require("body-parser");
import cors from "cors";
// import cors = require("cors");

import mongoose from "mongoose";
// import mongoose = require('mongoose')

// const db = require
// import * as bodyParser from "body-parser";
const app = express();
// Express configuration
app.set("port", process.env.PORT || 3000);

app.use(cors())
// app.use((req:any, res:any, next:any) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "PUT, POST, GET, DELETE, OPTIONS, HEAD"
//   );
//   res.header("Content-Type", "application/json; charset=utf-8");
//   next();
// });
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
// 链接mongodb
mongoose.connect('mongodb://localhost:27017/zhihu',{ useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('open',function(err: any){
  if(err){
    console.log('数据库连接失败');
    throw err;
  }
  console.log('数据库连接成功')
})

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/user", require(__dirname + "/api/user"));
// app.use('/user', express.static(__dirname + '/api/user'))
// require('./routers/admin/index')(app)
// require('./routers/index/user')(app)
require('./routers/user/index')(app)
require('./routers/index')(app)
// app.use("/user",require("./routers/user/index"))
// app.listen(8091, () => {
//   console.log("express listen port 8091");
//   console.log("http://localhost:8091")
// });
export = app;