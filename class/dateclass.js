function dataMethod(){
    const currentDate = new Date();
    console.log("Current Date:",currentDate);
//getting various componemt of the date
    console.log("Date:",currentDate.getDate());
    console.log("Month:",currentDate.getMonth()+1);//Month are zero-indexed,so add 1
    console.log("Year:",currentDate.getFullYear());
    console.log("Hours:",currentDate.getHours());
    console.log("Minutes:",currentDate.getMinutes());
    console.log("Secoonds:",currentDate.getSeconds());
//setting component of the data
currentDate.setFullYear(2022);
console.log("After setFullYear:",currentDate);

currentDate.setMonth(5);//setting month to june(zero-indexed)
console.log("After setMonth:",currentDate);

//getting and setting time milliseconds scince 1970
console.log("Time in milliseconds scince 1970:",currentDate.getTime());

const newDate = new Date(2024,8,19);//creating new date
console.log("New Date:",newDate);
}

//Example usage for DateMethods
dataMethod();