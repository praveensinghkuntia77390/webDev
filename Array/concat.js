function concatExample(arr1,arr2){
    console.log("Original Array:",arr1,arr2);
    let arr3 = arr1.concat(arr2);
    console.log("After concat:",arr3);
}

concatExample([1,2,3,4],[5,6,7,8]);