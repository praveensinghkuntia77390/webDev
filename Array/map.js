function mapExample(arr){
    console.log("Original Array:",arr);
let newArr = arr.map(logThing);
console.log("After Map:",newArr);
}

function logThing(item){
    return item*2;
}

mapExample([1,2,3]);

