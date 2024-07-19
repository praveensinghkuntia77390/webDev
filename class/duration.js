function calculateSum(){
    let a=0;
    for(let i=0;i<=1000000000;i++){
        a = a+i;
    }
    return a;
}

 const beforeDate = new Date();
 const beforeTimeInMs = beforeDate.getTime();
 calculateSum();
 
 const afterDate = new Date();
 const afterTimeInMs = beforeDate.getTime();
 console.log("Time taken for to calculae sum:",afterTimeInMs-beforeTimeInMs);