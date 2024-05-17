let calculate = document.querySelector("button")
let input01 = document.querySelector("input")
let temperature = document.querySelector(".temp-f")

calculate.addEventListener('click',()=>{
 temperature.innerText = parseFloat(eval(`(${input01.value}-32)*(5/9)`)).toFixed(2)
})