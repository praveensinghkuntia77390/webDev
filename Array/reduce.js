function reduceExample(arr){
console.log("Original Array:",arr);
let reduceArr = arr.reduce((item1,item2)=>{
return item1+item2;
});
console.log("After Reduce:",reduceArr);
}

reduceExample([1,2,3,5,2,1])
