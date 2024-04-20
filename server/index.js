const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const signUpModel = require("./models/signUpModel");

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/newUser");

app.post('/signup',(req,res)=>{
  signUpModel.create(req.body)
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})

app.post('/login', (req,res)=>{
  const {email,password}=req.body;
  signUpModel.findOne({email: email})
  .then(user=>{
    if(user){
      if(user.password === password){
        res.json("Success")
      }
      else{
        res.json("Incorrect Password")
      }
    }else{
      res.json("no record exists")
    }
  })
})

app.listen(5000,()=>{
  console.log("Server is listening on port 5000...")
})