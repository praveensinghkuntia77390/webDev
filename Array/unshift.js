function unshiftExample(arr,element){
    console.log("Original Array:",arr);
    arr.unshift(element);
    console.log("After unshift:",arr);
}

unshiftExample([1,2,3,4,5],79);