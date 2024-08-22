const express = require("express");
 const jwt =require("jsonwebtoken");
  const jwtPassword ="123456";

  const app = express();

   const ALL_USERS =[
    {
        username:"harkirat@gmail.com",
        password:"123",
        name:"harkirat singh",
    },{
        username:"harkirat@gmail.com",
        password:"1234",
        name:"Praveen singh",
    },{
        username:"harkirat@gmail.com",
        password:"1235",
        name:"Raman singh",
    },
];

function userExits(username,password){
//write logic to return true or false if thisuser exists
//in ALL_USERS array
}
  
app.post("/signin",function(req,res){
    const username = req.body.username;
    const password =req.body.password;

    if(!userExits(username,password)){
        return res.status(403).json({
            msg:"User doesnt exist in our memory db",
        })
    }

    var token =jwt.sign({username:username},"shhhhhh");
    return res.json({
        token,
    })
})

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decode =jwt.verify(token,jwtPassword);
        const username = decode.username;
        //returna list of users other then this username
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid token",
        })
    }
})

app.listen(3000);
  
  
   