function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,callback){
console.log(callback);
const val1 = callback(a);
const val2 = callback(b);
return val1+val2;
}

let ans = sumOfSomething(2,2,cube);
console.log(ans);