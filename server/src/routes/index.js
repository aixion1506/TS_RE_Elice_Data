const express = require("express");
const router = express.Router();
const data = require("./charts/data.js");


console.log("routes/index.js");
// 라우터
// chart
router.use("/charts", data) //get, 차트데이터 조회

module.exports = router;