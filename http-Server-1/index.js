const express = require('express');

const app = express();

app.get("",(req,res)=>{
    res.send("<h1>Welcome to the HomePage<h1>")
});
app.get("/about",(req,res)=>{
    res.send(`
        <input type ="text" placeholder ="username"/>
        <button>click here</button>`
    )
});
app.listen(5000);