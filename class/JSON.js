//JSON parse
const users = '{"name": "Harkirat","age": "24","Gender": "Male"}';

const user2 = JSON.parse(users);
console.log(user2);



//JSON.stringify
 const user = {
Name:"Harkirat",
Gender:"Male",
Age:24
 }

 const finalString = JSON.stringify(user);
console.log(finalString);