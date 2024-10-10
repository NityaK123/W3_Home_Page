const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const fivth = document.getElementById('fivth')
const sixth = document.getElementById('sixth')
const seventh = document.getElementById('seventh')
const eighth = document.getElementById('eighth')
const nineth = document.getElementById('nineth')

const player1 = 'X'
const player2 = 'O'
let turn = true


function HandleClick(id){
    console.log(id)
    if(turn){
        id.innerText = player1
        turn = false
    }
    else{
        id.innerText = player2
        turn = true
    }
}

first.addEventListener('click',()=>HandleClick(first));
second.addEventListener('click',()=>HandleClick(second));
third.addEventListener('click',()=>HandleClick(third));
fourth.addEventListener('click',()=>HandleClick(fourth));
fivth.addEventListener('click',()=>HandleClick(fivth));
sixth.addEventListener('click',()=>HandleClick(sixth));
seventh.addEventListener('click',()=>HandleClick(seventh));
eighth.addEventListener('click',()=>HandleClick(eighth));
nineth.addEventListener('click',()=>HandleClick(nineth));

