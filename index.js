let value=0
let val1=0
let val2=0
let val3=0
let selectedValue=' '
let selectedValue1=' '
function operate(){
val1=document.getElementById("num1").value
val2=document.getElementById("num2").value
val3=document.getElementById("num3").value
const selectBox = document.getElementById("my-select")
const selectBox1=document.getElementById("my-select1")
selectedValue = selectBox.value
selectedValue1=selectBox1.value
let expression =val1+selectedValue+val2+selectedValue1+val3
value=Number(eval(String(expression)))
document.getElementById("vl").innerText=value;   
}
function add(){
    var historyContainer=document.getElementById("history")
    var historyItem=document.createElement('p')
    historyItem.textContent=val1+' '+selectedValue+' '+val2+' '+selectedValue1+' '+val3+'='+value
    historyContainer.appendChild(historyItem)
}