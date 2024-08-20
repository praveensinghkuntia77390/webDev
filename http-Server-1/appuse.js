const express = require('express');

const app = express();
let numberOfRequest = 0;

const reFilter = (req,res,next)=>{
    numberOfRequest++;
    console.log(numberOfRequest);
    if(!req.query.age){
        res.send("Please provide your age")
    }
    else if(req.query.age<18){
        res.send("You cannot acess to this page")
    }
    else{
        next();
    }
}
    app.use(reFilter)
    app.get("/",(req,res)=>{
        res.send("Welcome to this HomePage", numberOfRequest++)
    })

    app.listen(5009);