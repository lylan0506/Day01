//1.计算每队的平均分；
let John_avg = (89 + 120 + 103) / 3;
let Mike_avg = (116 + 94 + 123) / 3;
console.log("John的平均分为："+John_avg+"\n"+"Mike的平均分为："+Mike_avg+"\n");
//2.决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
if (John_avg > Mike_avg){
    console.log("John是获胜队伍！"+ "平均分为："+John_avg);
}
else if (John_avg < Mike_avg){
    console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg);
}
else{
    console.log("平局");
}
console.log("----------------------------------")
//3.然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
let John_avg1 = (96 + 121 + 110) / 3;
let Mike_avg1 = (116 + 86 + 78) / 3;
console.log("John的平均分为："+John_avg1+"\n"+"Mike的平均分为："+Mike_avg1+"\n");
if (John_avg1 > Mike_avg1){
    console.log("John是获胜队伍！"+ "平均分为："+John_avg1);
}
else if (John_avg1 < Mike_avg1){
    console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg1);
}
else{
    console.log("平局");
}
console.log("----------------------------------")
//4.Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
let Mary_avg = (97 + 134 + 105) / 3;
console.log("John的平均分为："+John_avg+"\n"+"Mike的平均分为："+Mike_avg+"\n" + "Mary的平均分为："+Mary_avg+"\n");
if ((John_avg > Mike_avg) && (John_avg > Mary_avg)){
    console.log("John是获胜队伍！"+ "平均分为："+John_avg);
}
else if ((Mary_avg > Mike_avg) && (John_avg < Mary_avg)){
    console.log("Mary是获胜队伍！"+ "平均分为："+Mary_avg);
}
else if ((Mike_avg > John_avg) && (Mike_avg > Mary_avg)){
     console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg)
}
else{
    console.log("平局");
}
console.log("----------------------------------")
//5.像前面一样，改变分数以产生不同的赢家，记住可能会有平局。
let John_avg2 = (97 + 102 + 108) / 3;
let Mike_avg2 = (116 + 89 + 114) / 3;
let Mary_avg2 = (97 + 102 + 108) / 3;
console.log("John的平均分为："+John_avg2+"\n"+"Mike的平均分为："+Mike_avg2+"\n" + "Mary的平均分为："+Mary_avg2+"\n");
if ((John_avg2 > Mike_avg2) && (John_avg2 > Mary_avg2)){
    console.log("John是获胜队伍！"+ "平均分为："+John_avg2);
}
else if ((Mary_avg2 > Mike_avg2) && (John_avg2 < Mary_avg2)){
    console.log("Mary是获胜队伍！"+ "平均分为："+Mary_avg2);
}
else if ((Mike_avg2 > John_avg2) && (Mike_avg2 > Mary_avg2)){
     console.log("Mike是获胜队伍！"+ "平均分为："+Mike_avg2)
}
else{
    console.log("平局");
}
console.log("----------------------------------")

​