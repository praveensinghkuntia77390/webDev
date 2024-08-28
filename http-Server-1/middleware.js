const express =require("express");

const app = express();

function ticketChecker(req,res,next){
    const ticket = req.query.ticket;
    if(ticket ==="free"){
        next();
    }else{
        res.status(403).json({
            msg:"Acces Denied"
        })
    }
}
app.use(ticketChecker);

app.get("/ride1",function(req,res){
    res.json({
        msg:"you have successfully riden thr ride 1"
    })
})
app.get("/ride2",function(req,res){
    res.json({
        msg:"you have successfully riden thr ride 2"
    })
})

app.listen(3000,()=>{
    console.log("Server is running at local port 3000");
});