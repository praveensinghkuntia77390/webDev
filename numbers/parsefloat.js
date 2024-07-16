function explainParseFloat(value){
console.log("Original Value:",value);
let result = parseFloat(value);
console.log(result);
}
explainParseFloat("32.14");
explainParseFloat("42");
explainParseFloat("42pdf");
explainParseFloat("abc");