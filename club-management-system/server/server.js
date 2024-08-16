import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginpage"
});
app.post('/login',(req,res)=>{
  const sql="SELECT *FROM login WHERE username=? AND password=?";
  
     
    const values =[
      req.body.username,
      req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
      if (err) return res.json({'login failed '});
      return res.json( data);

    })

  })

app.listen(8082),()=>{
    console.log("Server is running on port 8083");
}