const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

 app.post("/health-checkup",function(req,res){
 const kidneys = req.body.kidneys;
 const response = schema.safeParse(kidneys);
 if(!response.success){
    res.status(411).json({
        msg:"The input is inValid",
    })
 }else{
res.send({
        response
    });
}
 })

 app.listen(5003,()=>{
    console.log("Server is running on port 5003");
 });