const oStudent = {
    //创建对象字面量的方式，不像数组，没有顺序
    studentName:'liuyalan',
    age:22,
    org:['lovo','smart'],
    len:null,
    len1:undefined,
    course:{name:'java',day:1},
    learn:function() {
        console.log('hello,student');
    }
};

//构造函数
delete oStudent.len;
console.log(oStudent1.len);//输出得到undefined

//调用
oStudent1.learn();
oStudent1.learn2();
oStudent1['learn']();
console.log(oStudent['age']);

const oStudent1 = new Object();
oStudent1.studentName = 'lyl';
oStudent1.age = 22;

//计算属性
let a = 'student',b = 'Name';
// const 
console.log(oStudent1)


//简写
let studentName = 'lyl',age = 22;
const oStudent2 = {
    studentName:studentName,
    age:age
};
const oStudent3 = {studentName,age};//ES6
console.log(oStudent3.studentName);

//Symbol
// const name = Symbol('name');
// const superGilr

//判断属性或者方法是否存在
const teacher = {
    name:'liuyalan',
    age:22
};
//1.方法1，in运算符
console.log('name' in teacher);//True
console.log('sName' in teacher);//输出为false
//2.方法2 逻辑表达式
if (teacher.name !== undefined) {
    console.log('teacher.name 存在！');
}
//3.用hasOwnProperty()
if (teacher.hasOwnProperty('namae')) {
    console.log('我有这个属性')
}

const oStudent4 = {
    //创建对象字面量的方式，不像数组，没有顺序
    studentName:'liuyalan',
    age:22,
    org:['lovo','smart'],
    len:null,
    len1:undefined,
    course:{name:'java',day:1},
    learn:function() {
        console.log('hello,student');
    }
};
//遍历属性
for (let p in oStudent4) {
    console.log(p);
}

console.log(Object.keys(oStudent4));

for (let p of Object.keys(oStudent4)){
    console.log(p);
}

const values1 = Object.values1(oStudent4);
console.log(values1);

//按引用赋值
const aa = {name:'xiao'};
const bb = aa;
bb.name = 'xiaoxiao';
console.log(aa.name);//输出为xiaoxiao

//this
const dice = {
    side:6,
    roll() {
        return Math.floor(Math.random()*this.side)+1;
    }
} 
console.log(dice.roll());


let x=1,y=2,z=3;
console.log(Math.max(x,y,z));

// const myMath1 = {
//     max function
