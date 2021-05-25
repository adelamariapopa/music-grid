class Animal {
    constructor(name){
        this.name = name;
    }
    speak() {
        console.log('Hey i can speak!');
    }
}
class Dog extends Animal{
    #color = 'brown';

    constructor(name){
        super(name);
    }
    eat() {
        console.log('I can eat!');
    }
}

class Cat extends Animal{
    #color = 'brown';

    constructor(name){
        super(name);
    }
    eat() {
        console.log('I can eat!');
    }
}

let myDog = new Dog("Ares");
myDog.speak();


let myCat= new Cat("Miau");
myCat.speak();


const arr = [1, 2,3,4];
const [a, b, ...rest] = arr;
console.log({a, b});

const obj = {
    name: 'Adela',
    value: 45
}

const {value} = obj;
console.log(value);