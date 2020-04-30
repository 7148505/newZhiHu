// import * as express from "express";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// import * as bodyParser from "body-parser";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS, HEAD"
  );
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/tour/user", require(__dirname + "/module/user"));

app.listen(8091, () => {
  console.log("express listen port 8091");
});
