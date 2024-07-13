// function sum(num1,num2,fnToCall){
//     let result = num1+num2;
//     fnToCall(result);
// }
// function displayResult(Data){
//     console.log("Sum of the resultis:"+Data);
// }
// function displayResultPassive(Data){
//     console.log("Sum's result is:"+Data);
// }
 
// const ans = sum(10,29,displayResult);


//Making it more Small

function calculateArithmetic(a,b,arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}
function sum(a,b){
return a+b;
}
 const value = calculateArithmetic(6,10,sum);
 console.log(value);

