//filter
let arr=[2,3,4,5,6,7,8];
let newarr= arr.filter((val)=>{
    console.log(val);
    return val%2==0;
})
console.log(newarr);


//map
let ar=[2,3,4,5,6,7];
let newar= ar.map((value)=>{
    console.log(value);
    return value*2;
    
})
console.log(newar);