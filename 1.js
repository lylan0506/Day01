//函数的属性
function getStudent(name, gender) {
    return '';
}
console.log(getStudent.length) //输出为2

//剩余运算符，剩余参数...
function getStudent1(name, ...gender) {
    return '';
}
//name在这里为形参
console.log(getStudent1.length) //输出为1
console.log(getStudent1.name) //输出为getStudent1


const getStudent2 = function () {
    return '';
};
console.log(getStudent2.name);
// console.log()

//call
function add(c, d) {
    console.log(this.a + this.b + c + d)
}
add(3, 4);
//NaN why? this.a/this.b都是undefined
//等同于add.call(undefined,3,4);this 是全局对象
let num = {
    a: 1,
    b: 2
};
add.call(num, 3, 4); //输出为10

//
const person = {
    name: "liuyalan",
    say: function () {
        return `你好，我是${this.name}`;
    },
};

function moreSay(age, hobby) {
    console.log(`${this.say()},我${age}岁，喜欢${hobby}`);
}
moreSay.call(person, 22, "写代码");



//未打完
var lastName = "global_name"; //定义一个全局变量
const func = function (firstName) {
    return firstName + "" + this.lastName; //this的值根据如何调用函数
};
var person = {

}


//apply()方法借用
let array = ['a', 'b'];
let elements = [0, 1, 2];
//
let a = [...array, ...elements];
console.log(a); //输出['a','b',0,1,2]
//
array.push.apply(array, elements);
console.log(array); //输出也['a','b',0,1,2]，这种方法不好



//求最大值
const numbers = [5, 3, 7, 8, 1];
let max = Math.max.apply(null, numbers);
console.log(max);



//bind()
var small = {
    a: 1,
    go: function (b, c, d) {
        console.log(this.a + b + c + d);
    },
};
var large = {
    a:100,
};
small.go(2,3,4);//输出为10    go.call(small,2,3,4)




//
const person = {
    age:22,
    getNameAndAge:function (name) {
        return name +""+this.age;
    },
};
//直接在person对象上调用方法
person.getNameAndAge("liuyalan");//输出 liuyalan 22

//将方法的引用赋值给变量 nameAndAge
const nameAndAge=person.getNameAndAge;

//通过引用nameAndAge,调用赋值给他的函数
nameAndAge("liuyalan");//输出为liualan undefined  (函数在全局作用域)
const boundNameAndAge = nameAndAge.bind(person,"liuyalan");
boundNameAndAge();//输出为liuyalan 22 (bind()创建一个新函数，将this值。。。)
//不带任何参数绑定
const boundNameAndAge = nameAndAge.bind();
boundNameAndAge("liuyalan");//输出为liuyalan undefined
//将‘this’设置为‘undefined’
const boundNameAndAge = nameAndAge.bind(null,"liuyalan");
boundNameAndAge();//输出为liuyalan undefined




//函数的toString()方法
const getStudent = function() {
    return 'liu';
}
console.log(getStudent.toString());

console.log(Math.max.toString());


//Memoizaton
function square(x) {
    return x*x; 
}

function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]){

    }
}


//
const fina = function(n) {
    return n<2? n: fina(n-1) + fina(n-2);
};
console.time();
console.log(fina(40));//数字越大越耗时间
console.timeEnd()


//代缓存版本的
const finaCache = function(n) {
    finaCache.cache = finaCache.cache || {}
    // if (finaCache.cache != undefined) {
    //     finaCache.cache = finaCache.cache;
    // }else {
    //     finaCache={};
    // }

    if (!finaCache.cache[n]){
        finaCache.cache[n] = n < 2 ? n: finaCache(n-1) + finaCache(n-2) 
    }
    return finaCache.cache[n];
}
console.time();
console.timeEnd();
console.time();
let b=finaCache(40);
console.timeEnd();
console.log(b);


//
(function() {
    var temp = 2;
})();
console.log(temp);

//等同于 es6
{
    const temp = 1;
}
console.log(temp);



//应用临时变量

//初始化代码


//创建自包含的代码块-模块

//模块模式
var myModle = (function () {
    var myPrivateVar,myPrivateMethod;
    myPrivateVar = 0;//私有变量
    myPrivateMethod = function (foo) {
        //私有方法
        console.log(foo);
    };
    return{
        myPublicVar: "foo",//公开变量
        myPublicFunction: function (bar) {
            //公开方法
            myPrivateVar++;
            myPrivateMethod(bar);
        },
    };
})();



//
var myRevealingModule = (function () {
    var privateCounter = 0;
    function privateFunction() {
        privateCount++;
    }
    function publicFunction() {
        publicIncremenet();
    }
    function publicIncremenet() {
        privateFunction();
    }
    function publicGetCount(){
        return privateCounter;
    }
    //暴露公有属性和方法，指向私有属性和方法
    return {
        start: publicFunction,
        increment:publicIncremenet,
        count: publicGetCount,
    };
})();

myRevealingModule.start();




// 
// 闭包
function outerFunc () {
    let outerVar = "i am outside!";
    function innerFunc() {
        console.log(outerVar);
    }//闭包
    return innerFunc;
}

const myInnerFunc = outerFunc();
myInnerFunc();//输出为“i am outside”