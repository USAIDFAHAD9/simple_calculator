let no1=document.getElementById('number1')
let no2=document.getElementById('number2')
let ans=document.getElementById('resultbox')

function add()
{
    let x=parseFloat(no1.value)+parseFloat(no2.value) 
    ans.textContent=x
}
function subtract()
{
    ans.textContent=no1.value - no2.value
}
function multiply()
{
    ans.textContent=no1.value*no2.value
}
function divide()
{
    ans.textContent=no1.value/no2.value
}


