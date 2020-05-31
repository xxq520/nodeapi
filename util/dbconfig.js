// 引入mysql数据库
const mysql = require("mysql");
module.exports = {
    // 导出数据库配置
    config:{
        host: "localhost",
        port: 3306,
        user: "root",
        password: "53517230",
        database: "myuser"
    },
    // 连接数据库，使用mysql连接池的方式
    // 连接池的对象
    sqlConnect: function (sql,sqlArr,callBack) {
        let pool = mysql.createPool(this.config);
        pool.getConnection((err,conn)=>{
            console.log("1234560");
            if (err) {
                console.log("连接失败");
                return;
            }
            // 事件驱动回调
            conn.query(sql,sqlArr,callBack);
            // 释放连接
            conn.release();
        })
    }
};