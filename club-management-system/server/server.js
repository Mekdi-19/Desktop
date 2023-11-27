const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user:'root',
    password:'',
    database:'loginpage'
})
app.post('/',(re,res)=>{
  const sql = "SELECT *FROM login WHERE username =? AND password =?";
  const values =[
    req.body.email,
    req.body.password
  ]
  db.query(sql, [values],(err,data)=>{
    if(err)return res.json('login faild');
    else return res.json(data);
  })
})
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login";
    
    });
   

  

app.listen(8082, ()=> {
    console.log("server is running on the port")


});