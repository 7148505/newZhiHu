/**
 * 用户数据集相关
 * @author: XiaoNing
 * @since:  2020/05/04
 * @update: 2020/05/04
 */
import mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 声明一个数据集 对象
const userSchema = new Schema({
    username: {
        type: String,
        index: true,
        unique: true
    },
    password: {
        type: String
    },
    // age: Number,
    // address: String,
    createAt: {
        type: Date,
        default : Date.now()
    }
});

// 将数据模型暴露出去 = 将表的数据结构与表关联起来
module.exports = mongoose.model('users', userSchema);