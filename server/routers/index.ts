/**
 * 主要
 * @author: XiaoNing
 * @since:  2020/05/04
 * @update: 2020/05/04
 */
module.exports = (app: { use: (arg0: string, arg1: any) => void }) => {
    let express = require('express');
    let router = express.Router();
    let User = require('../models/users');
    
    router.get('/login', function (req: any, res: { render: (arg0: string) => void; }) {
        res.render('login');
    });
    router.get('/register', function (req: any, res: { render: (arg0: string) => void; }) {
        res.render('register');
    });
    
    // 这里的业务逻辑将写在 两个post 路由里 
    // 登录
    router.post('/login', function (req: { body: { username: any; password: any; }; }, res: { send: (arg0: string) => void; }) {
        let postData = {
            username: req.body.username,
            password: req.body.password
        };
        User.findOne({
            username: postData.username,
            password: postData.password
        }, function (err: any, data: any) {
            if(err) throw err;
            if(data){
                res.send('登录成功');
            }else{
                res.send('账号或密码错误')
            }
        } )
    });
    // 注册
    router.post('/register', function (req: any, res: any) {
           // 获取用户提交的信息
            let postData = {
                // username: req.body.username,
                username: "xiaoning",
                // password: req.body.password,
                password: "req.body.password",
                // age: req.body.age,
                age: 123,
                // address: req.body.address,
                address: "req.body.address"
            };
            // 查询是否被注册
            User.findOne({username: postData.username}, function (err: any, data: any) {
                if (data) {
                    res.send('用户名已被注册');
                } else {
                    // 保存到数据库
                    User.create(postData, function (err: any, data: any) {
                        if (err) throw err;
                        console.log('注册成功');
                        res.redirect('/userList');      // 重定向到所用用户列表
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