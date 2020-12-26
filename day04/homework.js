function mean(a,b,c) {
    return (a+b+c)/3
}


//方法一

function mean1(...args) {
    let sum = 0;
    for(let arg of args) {
        sum = arg + sum
    }
    return sum / args.length
}

console.log(mean1(1,2,3,4))



//方法二
function mean2(...args) {
    return args.reduce((acc,val) => acc + val) / args.length
}
console.log(mean2(1,2,3,4))


//只取偶数
function mean3(...args) {
    // const arg1 = args.filter( x => x%2 ==0)
    // console.log(args1)
    // return args1.reduce((acc,val)=> acc + val) / args1.length

    return args.filter(x => x%2 ==0).reduce((x,y)=> x+y) / args.filter(x => x%2 ==0).length
}
console.log(mean3(1,2,3,12))