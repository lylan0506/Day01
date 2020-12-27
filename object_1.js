//对象字面量语法创建对象
const dog = {
    name:'豆豆',
    breed:'泰迪',
    color:'棕色',
    bark(){
        return '汪汪！';
    },
};




//构造函数创建对象
function Dog (name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color
}

Dog.prototype.bark = new Dog('豆豆','泰迪','棕色');
dog1.bark();

let dog1 = new Dog('豆豆','泰迪','棕色');



//Object.create()创建对象
const dog = {
    name:'豆豆',
    breed:'泰迪',
    color:'棕色',
    bark(){
        return '汪汪！';
    },
};
let dog1 = Object.create(dog);


//es6 class 语法创建对象
class Dog {
    constructor(name,breed,color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
    bark() {
        return '汪汪！';
    }
}
let dog1 = new Dog('豆豆','泰迪','棕色');


//
const empty = {}
console.log(empty);