const express = require("express");
 const jwt =require("jsonwebtoken");
  const jwtPassword ="123456";

  const app = express();
  app.use(express.json());

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
//write logic to return true or false if this user exists
//in ALL_USERS array
//hard todo - try to use the find function in js
let userExists =false;
for(let i=0;i<ALL_USERS.length;i++){
if(ALL_USERS[i].username ==username && ALL_USERS[i].password==password){
    userExists=true;
}
}
return userExists ;
}
  
app.post("/signin",function(req,res){
    const username = req.body.username;
    const password =req.body.password;

    if(!userExits(username,password)){
        return res.status(403).json({
            msg:"User doesnt exist in our memory db",
        })
    }

    var token =jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })
})

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    const decode =jwt.verify(token,jwtPassword);
    const username = decode.username;
    //return a kist of users other than this username
    res.json({
        users:ALL_USERS.filter(function(value){
            if(value.username==username){
                return false;
            }else{
                return true;
            }
        })
    })
})

app.listen(3000,()=>{
    console.log("Server port is running in 3000");
});
  
  
   