//1.创建对象
//通过构造（object）函数创建对象
let myObject = new Object();
myObject.name = 'liuyalan';
myObject.age = '20';

console.log(myObject);

//2.通过对象字面量创建对象
const oStudent = {};
oStudent.name = 'liu';
oStudent.age = 22;
const oStudent1 = {
    name:'liu',
    age:22
};
console.log(oStudent1.name);
console.log(typeof oStudent1);//object

//声明数组的两种方式
//1.array
const a1 = new Array();

const a2 = [];
console.log(typeof a2);//输出:object
console.log(a2[0]);//声明变量未初始化赋值，输出为：undefined

//
const a2 = [];
a2[0] = 'a';
a2[1] = 2;
a2[5] = true;

console.log(typeof a2);
console.log(a2 instanceof Array);

console.log(a2[2]);

const a3 = [1,2,3,'abd',true,undefined,null,a2,oStudent1];//第二种方式
//初始化数组


//删除数组元素，delete：只删除内容，位置还在
const avengers = ['美国队长','绿巨人','灭霸'];
delete avengers[2];
console.log(avengers);

//pop删除元素是彻底删除最后一个元素
const avengers = ['美国队长','绿巨人','灭霸'];
avengers.pop;
console.log(avengers);
avengers.push('liuyalan');//push是加在后面
console.log(avengers);


//添加元素，到第一位unshift
const avengers = ['美国队长','绿巨人','灭霸','闪电侠'];
avengers.unshift('liuyalan');
console.log(avengers);
//


//
const avengers = ['美国队长','绿巨人','灭霸','闪电侠'];
const heroes = ['蝙蝠侠','雷神','蜘蛛侠','猪猪侠'];
const ah = [...avengers,...heroes];
console.log(ah);
//


const avengers = ['美国队长','绿巨人','灭霸'];
const av1 = avengers.join();
const av2 = avengers.join(' & ');
console.log(av1);
console.log(av2);


//
//1.切片slice
const avengers = ['美国队长','绿巨人','灭霸','蜘蛛侠','猪猪侠','蝙蝠侠'];
const av3 = avengers.slice(1,2)

console.log(avengers)
console.log(av3)


//2.splice
const avengers = ['美国队长','绿巨人','灭霸','蜘蛛侠','猪猪侠','蝙蝠侠'];
const av3 = avengers.splice(1,2,'liu','ya','lan')

console.log(avengers)
console.log(av3)

//3.
//方法1
const number1 = [1,2,23,10,3,8,9];
const a = number1.sort();
console.log(number1);
console.log(a);

//方法2
const str = ['a','b','c','1'];
str.reverse();
console.log(str);

//

const avengers = ['美国队长','绿巨人','灭霸','蜘蛛侠','猪猪侠','蝙蝠侠'];
const a = avengers.indexOf('美国队长');
console.log(a)//0
//
const avengers = ['美国队长','绿巨人','灭霸','蜘蛛侠','猪猪侠','蝙蝠侠'];
const b = avengers.includes('美国队长');
console.log(b)//rue

//

const number1 = [1,2,3,4]
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a=${a},b=${b},c=${c}`);
//
const [a,b,c,d] = [1,2,3,4]
console.log(`a=${a}, b=${b}, c=${c}`)
//
const [a,b] = ['liuyalan',true,1,2,2,1];
console.log(`a=${a},b=${b}`);
//
const summer = ['11','22','33'];
const winter = ['44','55','66'];
//const spring = ['77','88','99'];
// ????

//const nested = [ summer,winter];
const flat = [...summer,...winter];
console.log(flat);




//set
const oSet = new Set();
oSet.add(1);
oSet.add(2);
oSet.add(3).add(4).add(5);
oSet.add(5);
console.log(oSet);


//size,clear
const list5 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
a = list5.has('brown')
console.log(a);
console.log(list5);

list5.clear();
console.log(list5);


//集合{}变为数组[]方法一
const list6 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
const a = Array.from(list6);
console.log(a);
//数组方法二
const list6 = new Set().add(`the`).add(`quick`).add(`brown`).add(`fox`);
const a = [...list6];
console.log(a);

//数组变为集合//考点
const oArray1 = [1,2,3,4,22,34,5,6]
const oSet1 = new Set(oArray1);
console.log(oSet1);
const oArray2 = [...oSet1];
console.log(oArray2);


//weakset
let student = {
    name:'liu',
    age:19
};
const strong = new Set;
strong.add(student);
student = null;
console.log([...strong][0])


//
let student = {
    name:'liu',
    age:19
};
const weak = new WeakSet();
//weak.add(1);
weak.add(student);
student = null//所以不能用const,用let
console.log(weak.has(student));


//map存储键值对
const oMap = new Map();
oMap.set(1,'I');
oMap.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(oMap);
console.log(oMap.size);
const a = oMap.get(5);
console.log(a);
oMap.set('name','liuyalan')
const b = oMap.get('name');
console.log(oMap);
console.log(b);
console.log(oMap.has('name'));

const c = oMap.delete('name');
console.log(c);
oMap.clear();
console.log(oMap);


//
///
// Map

const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = [...oMap];
console.log(oArray);

const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = Array.from(oMap)
console.log(oArray);

const student = {
    name: 'liu',
    age: 21
};

student.name = 'liu'
student.age = 21
student = null;