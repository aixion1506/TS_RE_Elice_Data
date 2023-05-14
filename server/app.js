const express = require('express');
const app = express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const routers = require ('./src/routes/index.js')
app.use('/', routers)


app.get("/", (req, res) => { 
    res.send(`<h1>Project 10 Team / Bike Buddy</h1>`);
});
      

/* 3000포트에서 서버 구동 */
app.listen(3000, () => {
    console.log("localhost:3000 에서 서버가 시작됩니다.");
  });