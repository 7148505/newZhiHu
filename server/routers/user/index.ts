/**
 * 用户相关
 * @author: XiaoNing
 * @since:  2020/05/04
 * @update: 2020/05/04
 */
module.exports = (app: { use: (arg0: string, arg1: any) => void }) => {
    const express = require('express')
    const router = express.Router()
    // const mongoose = require('mongoose')
    // const Article = mongoose.model('Article')
    // const Category = mongoose.model('Category')
    // 获取资源
    router.get('/getData', async (req:any, res:any) => {
      res.send("hello world")
    })
    app.use('/index/api', router)
}