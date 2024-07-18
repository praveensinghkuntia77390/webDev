class animal{
    constructor(name,legCount,speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Welcome to the Animal kingdom");
    }

    speak(){
     console.log("This",this.name,this.speaks);
    }
}

console.log("Spend some time with these Animal"+animal.myType());
 let dog = new animal("Dog",4,"Bhow Bhow");
 let cat = new animal("Cat",4,"Meows");
   
 dog.speak();
 cat.speak();
