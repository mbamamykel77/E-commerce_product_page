let counter = 0;

let display = document.querySelector('.text_content')
let increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')

function incrementBtn(){
    counter++;
    display.textContent = counter;
}
increment.addEventListener('click', incrementBtn)

function decrementBtn(){
    if (counter !== 0) {
        counter--;
    }
    display.textContent = counter;
}
decrement.addEventListener('click', decrementBtn)