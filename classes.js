class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    speak(){
        console.log("hi, i m "+this.name+" my color is "+this.color);
        //template string
        console.log(`hi, i m ${this.name}, my color is ${this.color}`);
    }
}
let lion=new Animal("abc","golden");
console.log(lion);
lion.speak();