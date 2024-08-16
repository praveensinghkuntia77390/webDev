const express =require("express");

const app = express();
app.get("/health-checkup",function(req,res){
    //do health check-up here
   const kidneyId = req.query.kidneyId;
   const username = req.header.username;
   const password = req.header.password;

   if(username !="Hirkirat"&& password!="Pass"){
    res.status(402).json({
        msg:"User does not exit"
    })
    return
   }

   if(kidneyId !=1 && kidneyId !=2){
    res.status(411).json({
        msg:"Wrong Input"
    })
    return
   }
   //Do something with the kidney here
   res.send("Your heart is healthy")
})

app.listen(3000);