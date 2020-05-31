const express = require('express');
const router = express.Router();
// 引入连接数据库配置文件
const dbConfig = require("../util/dbconfig");
// 获取用户控制层
const getUserController = require("../controllers/userController");
// 抖音demo
const dyController = require("../controllers/dyuserController");

router.get('/', getUserController.getUser);
router.get('/getuser', getUserController.getUserInfo);
router.post('/sendcode', dyController.sendCode);
router.post('/insertUser', getUserController.insertUser);
router.post('/updataUser', getUserController.updataUser);

module.exports = router;
