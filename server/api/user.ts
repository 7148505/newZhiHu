/**
 * 用户相关
 * @author: XiaoNing
 * @since:  2020/05/04
 * @update: 2020/05/04
 */
module.exports = (app: { post: (arg0: string, arg1: (req: any, res: any) => Promise<void>) => void; get: (arg0: string) => any }) => {
  const express = require('express')
  const router = express.Router()
  const mongoose = require('mongoose')
  const multer = require('multer')
  const User = mongoose.model('User')
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')
  // 登录
  app.post('/admin/api/login', async (req:any, res:any) => {
    const { username, password } = req.body
    // if (!username) {
    //   res.status(422).send({
    //     message: "用户名为空"
    //   })
    //   return;
    // }
    // if (!password) {
    //   res.status(422).send({
    //     message: "密码为空"
    //   })
    //   return;
    // }
    // // 1.验证用户名是否存在
    // const user = await User.findOne({username}).select('+password')
    // if (!user) {
    //   res.status(422).send({
    //     message: "用户名错误"
    //   })
    //   return;
    // }
    // // 2. 验证密码是否合法
    // const isValid = bcrypt.compareSync(password, user.password)
    // if (!isValid) {
    //   res.status(422).send({
    //     message: "密码错误"
    //   })
    //   return;
    // }
    // 3. 生成jwt token并返回

  })
}