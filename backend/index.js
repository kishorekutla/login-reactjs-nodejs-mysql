const express = require("express")
const cors= require("cors")
const mysql = require('mysql2')
const bodyParser=require('body-parser')
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pravlika123@",
    database:"login"
})

app.get("/names",(req,res)=>{
    db.query("SELECT * FROM login_table",(err, data)=>{
        if(err) return res.json(err)
        return res.json(data) 
        
    })
})
app.post("/register", (req,res)=>{
         const name=req.body.name;
         const password=req.body.password;
         db.query("INSERT INTO login_table (name, password) VALUES (?,?)",[name, password],
         (err,data)=>{
            if(err) return res.json(err)
            return res.json(data) 
        })
})

app.post("/login", (req,res)=>{
    const name=req.body.name;
    const password=req.body.password;
    db.query("SELECT * FROM login_table WHERE name=? AND password=?",[name, password],
    (err,data)=>{
       if(err){
        res.send({err:err})
       } 


        if (data.length>0){
            res.send(data)
        }else{
             res.send({message:"Wrong User and  Password Combination"})
        }
       
   })
})

app.listen(3001, ()=>{
    console.log("into the nodejs-3001")
})