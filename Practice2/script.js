const maze = document.getElementById('maze')
const div = document.createElement('div')

for(let i=0;i<5;i++){
    const div1 = document.createElement('div')
    div1.id="maz"
    for(let j=0;j<=5;j++){
        const div = document.createElement('div')
        div.className="cell"
        div1.appendChild(div)
    }
    maze.appendChild(div1) 
}
maze.style.gridTemplateColumns = `repeat(5,0fr)`;  

function Click(){ 
    const out = document.querySelectorAll('#maz')
    console.log(out)
    for(let i=0;i<5;i++){
        console.log(out[i])
       setTimeout(()=>{
        for(let j=0;j<5;j++){
            out[i].style.backgroundColor="red"
        }
       },2000)
    }
}

const btn = document.getElementById('button')
console.log(btn)
btn.addEventListener('click',Click)

