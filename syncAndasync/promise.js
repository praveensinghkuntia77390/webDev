function kiratsAsyncFunction(){
    var p = new Promise(function(resolve){
        setTimeout(resolve,2000)
    });
    return p;
}
const val = kiratsAsyncFunction();
val.then(function(){
    console.log("Hii there");
})