// 引入连接数据库配置文件
const dbConfig = require("../util/dbconfig");
function random(min,max) {
    return Math.floor( Math.random() * (max - min) ) + min;
}
// 模拟发送验证码接口
const sendCode = (req,res,next)=>{
    // 获取发送验证码的手机号
    let phone = req.query.user_phone;
    let code = random(1000,9999);
    res.send({
        code: 200,
        msg: "发送成功"
    });
    console.log(code)
};
module.exports = {
    sendCode
};
