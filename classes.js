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
//let lion=new Animal("abc","golden");
//console.log(lion);
//lion.speak();
class Lion extends Animal{
    constructor(name,color,role,home){
        super(name,color);
        this.role=role;
        this.home=home;
    }
    roar(){
        console.log(`I m ${this.role}, I lives in ${this.home}`);
    }
}
let lion= new Lion("abc","golden","king","rocks");
//console.log(lion);
lion.roar();