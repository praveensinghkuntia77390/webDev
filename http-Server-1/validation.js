//if this an array of numbers with atleast 1 input , return true,else return false



// {
// email => string =>should look like email
// password  => should have 8 letters
//   }
//


const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })
    const response =schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"Praveen@gmail.com",
    password:"32322232321nds"
});

