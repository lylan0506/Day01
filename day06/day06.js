function greeting() {
    const a = 1+b
    return 'hi'

}

function sum(a,b,c)


//执行上下文context,抽象概念，表示javascript代码执行的环境
//全局执行只有一个，函数执行上下文：每次调用一个函数时，就会创建一个

/**
 * 执行上下文（EC）的有两个阶段
 * 1.创建阶段：只是扫描整个代码，但不执行
 * 环境是一种存储标识符到变量映射的结构
 * 
 * 2.执行阶段
 */
const person={
    name:'liuyalan',
    birthday:1998,
    calAge:function() {
        console.log(`年龄为 ${2020-this.birthday}`)
    }
}
person.calAge()

const calage=person.calAge
calage();//输出结果为NAN，因为意味this为全局对象，this.birthday为undinfine,2020-undinfine=NaN,函数调用方式出现错误





//作业：分析下面代码，用图形文字分析
//先创建一个全局执行上下文

/**
 * 1,创建：环境记录、outer,this
 * 
 * 凡是var，是undefined
 * 
 * 2.执行阶段
 * 
 */
let a=20;
const b = 30;//未初始化
var c;

function multiply(e,f){
    var g = 20;
    return e*f*g;
}
c = multiply(20,30);



//
function multiply(e,f){
    var g = 20;
    return e*f*g;
}
var c;

let a = 20;
const b = 30;
c = multiply(20,30)




//hoisting提升，是一种JavaScript解释器现象
console.log(sayHello)
console.log(strMessage)
console.log(sayHi)
function sayHello() {
  return 'Hello, JavaScript!'
}
var strMessage = 'Hello, Freshman!'
var sayHi = function () {
  return 'Hi, JavaScript'
}


/**
 * 全局作用域
 * 函数作用域
 * 块级作用域
 * 
 * 最好用let,const,不要用var，容易出错
 * 
 * 全局执行上下文中通过var声明的变量，会自动成为全局对象的属性
 * 
 * 全局
 */
//变量提升,只适用于var
function foo() {

}



//this 绑定
var name = 10;
const foo = function() {
    // let name = 12
    console.log(this.name);
}
foo();//输出结果为NaN,插件有问题，应该输出为10；

// const oStudent = {
//     name:'liuyalan',
//     age:22
//     calAge:foo
// }