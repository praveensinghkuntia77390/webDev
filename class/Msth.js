function mathMethod(value){
    console.log("Original Value:",value);

let rounded = Math.round(value);
console.log("After round():",rounded);

let ceiling = Math.ceil(value);
console.log("After ceiling:",ceiling);

let flooring = Math.floor(value);
console.log("After floor():",flooring);

let randomValue = Math.random();
console.log("After random():",randomValue);

let maxValue = Math.max(5,10,15);
console.log("After max():",maxValue);

let minValue = Math.min(4,66,1,0);
console.log("After min():",minValue);

let powerOfTwo = Math.pow(value,2);
console.log("After power():",powerOfTwo);

let squareRoot = Math.sqrt(value);
console.log("After sqrt():",squareRoot);

}

//Example usage for mathMethod()
mathMethod(4.56);
mathMethod(9);
mathMethod(25);
