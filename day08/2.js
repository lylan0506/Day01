const oList=document.querySelector('#list1')//ul

//ul的第二元素字节点
const oli = oList.firstElementChild.nextElementSibling
oli.style.backgroundColor='grey'
oli.style.boder='1px solid blue'

const comStyle = window.getComputedStyle(oli)
console.log(comStyle)
