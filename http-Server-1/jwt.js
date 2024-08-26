const jwt = require("jsonwebtoken");

//decode ,verify ,generate

const value ={
    name:"harkirat",
    accountNumber:123123
}

//jwt
const token=jwt.sign(value,"secret");
console.log(token);

//this token has been generated using this secret,
//and hence this token can only be verified suing this secret