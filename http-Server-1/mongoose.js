const express = require('express');
const mongoose = require("mongoose");
const app = express();

 app.use(express.json());


mongoose.connect('mongodb+srv://Praveen:Wildstone%4077390@cluster0.52lsm.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String,
    email:String,
    password:String
 });


 app.post("/signup",async function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email:username});
   if(existingUser){
    return res.status(400).send("Username already exist");
   } 
    const user = new User({
        name:name ,
        email:username,
        password:password
       });
   
   user.save();
   res.json({
    msg:"User created successfully"
   })
 })

 app.listen(3000,()=>{
    console.log("Server is running on port 3000");
 });
