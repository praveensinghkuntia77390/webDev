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

//Same Program 

function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);
  
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);
  
    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
  }
  
  // Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
  
  jsonMethods(sampleJSONString);
  