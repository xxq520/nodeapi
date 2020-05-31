// 引入连接数据库配置文件
const dbConfig = require("../util/dbconfig");
// 获取所有用户信息
const getUser = (req,res,next)=>{
    let sql = "select * from user";
    let sqlArr = [];
    let callBack = (err,data)=>{
        if (err) {
            console.log("连接失败喽");
        } else {
            res.send({
                "list" : data
            })
        }
    };
    dbConfig.sqlConnect(sql,sqlArr,callBack)
};
// 获取某个用户信息明细
const getUserInfo =  (req,res,next)=>{
    let {name} = req.query;
    let sql = "select * from userInfo where name=?";
    let sqlArr = [name];
    let callBack = (err,data)=>{
        if (err) {
            console.log("连接失败喽");
        } else {
            res.send({
                "list" : data
            })
        }
    };
    dbConfig.sqlConnect(sql,sqlArr,callBack)
};
// 插入用户数据
const insertUser = (req,res,next)=>{
    let {name,age} = req.body;
    let time = (new Date()).valueOf();
    let sql = "insert into user(name,age,create_timer) value(?,?,?)";
    let sqlArr = [name,age,time];
    let callBack = (err,data)=>{
        if (err) {
            console.log("连接失败喽");
        } else {
            res.send({
                "list" : data
            })
        }
    };
    dbConfig.sqlConnect(sql,sqlArr,callBack)
};
// 更新用户数据
const updataUser = (req,res,next)=>{
    let {name,age,id} = req.body;
    let time = (new Date()).valueOf();
    let sql = "update user set name=?,age=? where id=?";
    let sqlArr = [name,age,id];
    let callBack = (err,data)=>{
        if (err) {
            console.log("连接失败喽");
        } else {
            res.send({
                "list" : data
            })
        }
    };
    dbConfig.sqlConnect(sql,sqlArr,callBack)
};
module.exports = {
    getUser,
    getUserInfo,
    insertUser,
    updataUser
};