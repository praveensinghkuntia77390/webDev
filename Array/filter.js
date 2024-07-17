function filterExample(arr){
    console.log("Original Array:",arr);
    let newArr = arr.filter((item)=>{
        return item>3;
    });
    console.log("After Filter:",newArr);
}

filterExample([2,0,1,4,67,98,19]);