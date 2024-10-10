const chnageColor = document.getElementById('colorChange')


let timer;


function ChangeColor(){
    let x=2
    timer = setInterval(()=>{
        chnageColor.style.backgroundColor = `rgb(${x},1,${x})`
        console.log(x)
        if(x > 255){
            x = 0
        }
        else{
            x=x+50
        }
    },1000)
    return timer
}

const start = document.getElementById('start')
const stop = document.getElementById('stop') 

stop.addEventListener('click',()=>{
    console.log('stop')
    clearInterval(timer)
})

start.addEventListener('click',()=>{
    clearInterval(timer)
    ChangeColor();
})

const main = document.getElementById('main');

(()=>{
    setTimeout(()=>{main.innerText="Nityanand Gupta"},2000)
})()
