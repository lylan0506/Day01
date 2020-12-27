//包装器对象
let bool = new Boolean(true);
console.log(typeof bool);//object
console.log(bool === true);//false
console.log(bool.valueOf());//true
console.log(bool.toString());//true

//2.当作函数来用
let a = Boolean(true);
console.log(a);

//0,undefined,null,'',NaN
Boolean(null);//输出为false
Boolean(0);//输出为false
//如果判断元素是否存在，用if
if (oStudent.name) {
    console.log('hello');
}

//Number
let num = new Number(123);
console.log(num.length);

let b = Number.parseInt(11213.001);
console.log(b);

let c = Number.parseFloat(123.00);
console.log(c);
console.log(Number.isInteger(c));

let d = Number.isInteger(123.6);
console.log(d);

//string对象
let e = String.fromCharCode(97);
e = String.fromCodePoint('0x10');
console.log(e);
let d = 'liuyalan' 