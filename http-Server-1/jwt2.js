// - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
// - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
//  - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
//  - To test, go to the 02-jwt folder and run `npx jest ./tests`

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
      const signature = jwt.sign(username,jwtPassword)
      
    return signature;
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}


function verifyJwt(token){
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }catch(err){

    }
    return false;

}

const ans = signJwt("praveen@gmail.com","123123");
console.log(ans);

const ans2 =verifyJwt("eyJhbGciOiJIUzI1NiJ9.cHJhdmVlbkBnbWFpbC5jb20.99d3sbTostAmJYXoZoNq-DETtWuyPfUtXJY5yw8HLpY");
console.log(ans2);
