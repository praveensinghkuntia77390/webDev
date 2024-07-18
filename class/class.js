class animal{
   constructor(name,legCount,speaks){
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;
   }
   speak(){
      console.log("Hi there",this.speaks);
   }
   legs(){
      console.log("this",this.name,"has",this.legCount,"legs");
   }
}


let dog = new animal("dog",4,"bhow bhow");
let cat = new animal("cat",4,"meow");
cat.speak();
dog.speak();
dog.legs();
cat.legs();
