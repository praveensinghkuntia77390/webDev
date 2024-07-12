const alluser=[{
    firstname:"Hirkirat",
    gender:"male"
},{
    firstname:"Raman",
    gender:"male"
},{
    firstname:"priya",
    gender:"female"
},{
    firstname:"Praveen",
    gender:"male"
}]
for(let i=0;i<=alluser.length;i++){
    if(alluser[i]["gender"]=="male"){
        console.log(alluser[i]["firstname"]);
    }
}