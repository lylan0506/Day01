//字面量
let a = '',b = ' ',c = ' ';//字符串字面量
let oArray = [1,2,3];
const oStudent

/**
 *定义函数的4种方式
 */
//1.函数声明
function sayHello() {
    console.log('hello,javascript');
};  // 定义了一个函数字面量


//函数表达式
const sayHello = function () {
    console.log('hello,hello')
};  //匿名函数表达式

const sayHello = function sayHi() {
    console.log('hello,js')
};  //命名的函数表达式

//function构造函数，不建议使用
const sayHello  = new Function("console.log('hello,js!')");


//ES6新增语法，箭头函数
const sayHello = () => {console.log('hello,js')};

sayHello();//加括号


//函数的返回值和调用
const sayHello = function() {
    let a = 1,b = 2;
    let c = a + b;
    return c;
};
console.log(sayHello());//输出结果为3

//
const sayHello = function() {
    let a = 1,b = 2;
    let c = a + b;
    return;
};
console.log(sayHello());//输出结果为undefined

//
const sayHello = function() {
    let a = 1,b = 2;
    let c = a + b;
   // return c;
};
console.log(sayHello());//输出结果也为undefined

//函数参数
const add = function(a,b) {
    return a + b;
}
let a = add(2,3);
console.log(a);//输出为5


//
const add1 = function (a,b) {
    return a + b;
};
let b = add1();
console.log(b);//输出NaN(NAN=not a number,undefined+undefined)



//
const add1 = function (a,b) {
    return a + b;
};
let b2 = add1(1);//只传递一个参数
console.log(b2);//NaN


//
const add1 = function (a,b) {
    return a + b;
};
let b3 = add1(1,2,3,4);
console.log(b3)//输出结果为3

//
const add2 = function (a,b) {
    let a1 = arguments.length;
    console.log(a1);
    console.log(arguments[5]);
    return a + b;
};
let b4 = add2(1,2,2,2,3,4);
console.log(b4);


//第一种用法
const add3 = function (a,b) {
    let sum = 0;//初始化为0
    for (let i = 0; i < arguments.length;i++) {
        sum = sum + arguments[i];
    }
    return sum;
};
let b5 = add3(1,2,3,4,5,6,1);
console.log(b5);

//第二种用法,相对来说，此方法比比第一种方法更靠谱
const add = function(...numbers) {
    let sum = 0;
    for(const num of numbers) {
        sum = sum + num;
    }
    return sum;
}
let a1 = add(1,2,3,4,5,6,1);
console.log(a1);

//箭头函数
const add1 = (...numbers) =>{
    let sum = 0;
    for(const num of numbers) {
        sum = sum + num;
    }
    return sum;
}
console.log(add1(1,2,3,4,5,6,1));


//
const add2 = function(a,b) {
    return a + b;
}

//
const add2 = (a,b) => a + b;
const add3 = () => {return 3};
//
const add4 = a =>a + 1;
const add4 = function(a) {
    return a + 1;
}


//默认参数
const sayHi = function(studentName = 'liuyalan') {
    console.log(`hello,${studentName}`);//这里不是引号，是1旁边的符号
}
sayHi();
sayHi('java');

//callback回调
//1用函数声明
function dance(){
    console.log('我在跳舞');
}
function sing(song,callback){
    console.log(`我在唱${song}`);
    if ((typeof callback) == 'function'){
        callback();
    }
}
sing('国歌',dance);//dance后面不加括号


//2改写成函数表达式
const dance = function() {
    console.log("我在跳舞");
}
const sing = function(song,callback){
    console.log(`我在唱${song}`);
    if ((typeof callback) == 'function'){
        callback();
    }
}
sing('国歌',dance);//dance后面不加括号

//3改写成箭头函数版本
const dance = () => {console.log('我在跳舞')};
const sing = (song,callback) => {
    console.log(`我在唱${song}`)
    if ((typeof callback) == 'function'){
        callback();
    }
}
sing('国歌',dance);//dance后面不加括号

//4用箭头函数作为回调函数
const sing = (song,callback) => {
    console.log(`我在唱${song}`)
    if ((typeof callback) == 'function'){
        callback();
    }
}
sing('国歌',() =>(console.log('我在跳舞')))




//回调函数的应用
//1.对数组排序Array.sort()//按字母分类顺序排
const oArray = [1,10,2,11,9,8];
console.log(oArray.sort());
//按数字大小排序
const num = (a,b) => a - b;
console.log(oArray.sort(num));//加了回调函数

///
//
//
//
///
/////////////

//函数的迭代foreach

const oArray1 = [1,2,2,4]
for (let i = 0; i < oArray1.length; i++) {
    console.log(oArray[i])
}

const oArray2 = [1,2,2,4]
for (const i of oArray2) {
    console.log(i);
}

const oArray3 = [1,2,2,4]
oArray3.forEach((arr1) => {console.log(arr1)});


// Array.map()

const oArray4 = [1,2,2,4]

const sum = (a) => a * a ;

const oArray5 = oArray4.map(sum);

console.log(oArray5)


// reduce

const oArray1 = [1,2,3,4,5].reduce((acc,val) => acc + val);
console.log(oArray1);

const oArray1 = [1,2,3,4,5]

const oArray2 = oArray1.reduce(
    (acc,curVal) => acc + curVal
)
console.log(oArray2)

const oArray3 = [1,2,3,4,5].reduce((acc,val) => acc + val, 10);
console.log(oArray3)


const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(" ");
console.log(words);
const total = words.reduce((acc, word) => acc + word.length, 0);
console.log(total);

// filter
const a1 = [1,2,3,12,8];

const a2 = a1.filter((x)=> x%2 ===0);
console.log(a2);

console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ))
