//输出1~4行的*号
var str = "";
for(var i = 1; i <= 4; i++){
    var blank = "",
    stars = "";
for(var j = 1; j <= 4 - i; j++) { //每行输出的的空格数
    blank = blank + " ";
}
for(var k = 1; k <= i; k++) { //每行输出的的*号
    stars = stars + "*" + " ";
}
   str = str + blank + stars + "\n";
}
//输出5~7行的*号
for(var i = 4-1; i > 0; i--){
     var blank = "",
     stars = "";
for(var j = 1; j <= 4 - i; j++){
    blank = blank + " ";
}
for(var k = 1;k <= i; k++){
    stars = stars + "*" + " ";
}
   str = str + blank + stars + "\n";
}
console.log(str);