// const initialArray = [1,2,3,4,5];

// function logThing(str){
//     console.log(str);
// }

// initialArray.forEach(logThing);



function forEachExample(arr){
    console.log("Original Array:",arr);
    arr.forEach(function(item,index){
        console.log(item,index);
    });
}
 
forEachExample([1,2,3]);
