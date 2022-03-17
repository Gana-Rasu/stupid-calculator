let num1 = 8;
document.querySelector("#num1-el").innerHTML=num1;
let num2 = 2;
document.querySelector("#num2-el").innerHTML=num2;

let result = 0;
const add = document.getElementById("add");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const sub = document.getElementById("sub");
const sum = document.getElementById("sum")


add.addEventListener("click",(e)=>{
    result = num1+num2;
    sum.innerHTML = `Result : ${result}`;
})

mul.addEventListener("click",(e)=>{
    result = num1*num2;
    sum.innerHTML =`Result : ${result}`;
})


div.addEventListener("click",(e)=>{
    result = num1/num2;
    sum.innerHTML = `Result : ${result}`;
})

sub.addEventListener("click",(e)=>{
    result = num1-num2;
    sum.innerHTML = `Result : ${result}`;
})