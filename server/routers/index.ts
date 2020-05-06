/**
 * 主要
 * @author: XiaoNing
 * @since:  2020/05/04
 * @update: 2020/05/04
 */
import express from "express";
import crypto from "crypto";
// import moment from "moment";
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
// const User = require('../models/users')


module.exports = (app: { use: (arg0: string, arg1: any) => void }) => {
    // import express = require('express');
    const User = require('../models/users')
    let router = express.Router();
    router.get('/login', function (req: any, res: { render: (arg0: string) => void; }) {
        res.render('login');
    });
    router.get('/register', function (req: any, res: { render: (arg0: string) => void; }) {
        res.render('register');
    });
    // 这里的业务逻辑将写在 两个post 路由里
    // 登录
    router.post('/login', function (req: any, res: any) {
        let md5 = crypto.createHash("sha1");
        // 加密
        let newPas = md5.update(req.body.password).digest("hex");
        // 获取用户提交的信息
        let postData = {
            username: req.body.username,
            password: newPas
        };
        User.findOne({
            username: postData.username,
            password: postData.password
        }, function (err: any, data: any) {
            // if(err) throw err;
            if(data){
                res.json({
                    success: 200,
                    message: '登录成功'
                })
                // res.send('登录成功');
            }else{
                res.status(302).json({
                    success: 302,
                    message: '账号或密码错误'
                })
                // res.send('')
            }
        } )
    });
    // 注册
    router.post('/register', function (req: any, res: any) {
        let md5 = crypto.createHash("sha1");
        let newPas = md5.update(req.body.password).digest("hex");
        // 获取用户提交的信息
        let userRegister = new User({
            username: req.body.username,
            password: newPas // 将密码加密
        })
        // 将 objectId 转换为 用户创建时间
        // objectId即为每一行数据中的_id
        // ObjectId 是一个12字节 BSON 类型数据，有以下格式：
        // 前4个字节表示时间戳
        // 接下来的3个字节是机器标识码
        // 紧接的两个字节由进程id组成（PID）
        // 最后三个字节是随机数。
        // 因此objectIdToTimestamp的作用即是将前4个字节的时间戳转化
        userRegister.createAt = moment(objectIdToTimestamp(userRegister._id)).format('YYYY-MM-DD HH:mm:ss');
        // 获取用户提交的信息
        // let postData = {
            // username: req.body.username,
            // username: "xiaoning",
            // password: newPas,
            // password: "req.body.password",
            // age: req.body.age,
            // age: 123,
            // address: req.body.address,
            // address: "req.body.address"
        // };
        // 查询是否被注册
        User.findOne({username: (userRegister.username).toLowerCase()}, function (err: any, data: any) {
                if (data) {
                   // res.send('用户名已被注册');
					res.json({
						success: false,
						message: '该用户名已注册'
					})
                } else {
                    // 保存到数据库
                    User.create(userRegister, function (err: any, data: any) {
						if (err) {
							res.json(err)
						} else {
							res.json(data)
						}
						// console.log('注册成功');
						// res.send('注册成功');
                    	// res.redirect('/index/api/userList');      // 重定向到所用用户列表
                    })
                }
        });
    });
    // 获取所有用户列表
    router.get('/userList', function (req: any, res: { send: (arg0: any) => void; }) {
        let userList = User.find({}, function (err: any, data: any) {
            if (err) throw  err;
            res.send(data)
        });
    });
    app.use('/index/api', router)
}