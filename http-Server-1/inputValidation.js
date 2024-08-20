const express = require("express");

const app = express();

app.use(express.json());

 app.post("/health-checkup",function(req,res){
    //kidney=[1,2]
    const kidneys = req.body.kidneys;
    const kidneyLenght = kidneys.lenght;

    res.send("You have " +kidneys+ " kidney ");
 })

 app.use(function(err,req,res,next){
    res.json({
        msg:"Oops...! Something went wrong with the Server"
    })
 })

 app.listen(5007,()=>{
    console.log("Server is running on port 5007");
 });