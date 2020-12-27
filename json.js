let a = JSON.stringify(oStudent,null,2);
console.log(a);


const b = `{"student Name":"liuyalan","age":22,"org":['lovo','smart']}`
const oStudent1 = JSON.parse(b);
for (let p in oStudent1) {
    console.log(p);
}
//属性名字全部要用双引号引起来

//math对象
let x=1,y=2,z=3;
console.log(`最大值为：${Math.max(x,y,z)}`);

const scores = [1,2,3,3,32,12,4,121];
console.log(`最大值为：${Math.max(...scores)}`);

let a = Math.random() * 6;//得到一个0-1.0之间的小数
console.log(a);
console.log(Math)
