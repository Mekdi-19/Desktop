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
app.post('/singup',(req,res)=>{
  const sql="INSERT INTO login ('name ','email','password','id','phone') VALUES(?)";
  bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
    if(err) return res.json({Error:"error for hosting password"});
    const value =[
      req.body.name,
      req.body.email,
      hash,
      req.body.id,
      req.body.phone
    ]
    db.query(sql,[value],(err,result)=>{
      if (err) return res.json({Error:'inserting data error in server '});
      return res.json({Status:'success'});

    })

  })

})
app.listen(8082),()=>{
    console.log("Server is running on port 8083");
}