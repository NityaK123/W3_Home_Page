const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const bucket1 = document.getElementById("bucket1")
const bucket2 = document.getElementById("bucket2")


let count = 0
let count1 = 10
button1.addEventListener('click',()=>{
    bucket2.innerText = ++count
    bucket1.innerText = --count1
    console.log("bucket1");
})


button2.addEventListener('click',()=>{
    bucket2.innerText = --count
    bucket1.innerText = ++count1
    console.log("bucket1");
})

