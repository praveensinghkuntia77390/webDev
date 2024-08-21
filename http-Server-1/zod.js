const express = require("express");
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());

app.use(express.json())

 app.post("/health-checkup",function(req,res){
    //kidney=[1,2]
    const kidneys = req.body.kidneys;
 const response = schema.safeParse(kidneys)

    res.send({
        response
    });
 })

//  app.use(function(err,req,res,next){
//     res.json({
//         msg:"Oops...! Something went wrong with the Server"
//     })
//  })

 app.listen(5005,()=>{
    console.log("Server is running on port 5007");
 });