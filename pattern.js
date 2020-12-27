//正则表达式
const pattern = /javascript/;
pattern.test('javascript');
console.log(pattern.test('javascript'));

//RegExp创造正则表达式的两种方法
const pattern1 = new RegExp('javascript');
let a = pattern1.test('javascript');
console.log(a);

/dog/.test('hot dog')//true
/d.g/.test('doooog')
