let counter = 0;

let display = document.querySelector('.text_content')
let increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')
let button = document.querySelector('.button')
let pop_up = document.querySelector('.pop_up')
let images = document.querySelectorAll('.images')
let mainImg = document.querySelector('.box_image')


// Add increment
function incrementBtn(){
    counter++;
    display.textContent = counter;
}
increment.addEventListener('click', incrementBtn)

// Add decrement
function decrementBtn(){
    if (counter !== 0) {
        counter--;
    }
    display.textContent = counter;
}
decrement.addEventListener('click', decrementBtn)


// Add pop_up when cart is empty
function addCart(){
    if (counter === 0){
       pop_up.classList.add('active')
       setTimeout(() => {
        pop_up.classList.remove('active');
      }, 3000);
    }
    else{
        pop_up.classList.remove('active')
    }
}
button.addEventListener('click', addCart)


// Looping through the image
 for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click', function(){
        mainImg.src = this.src
    })
 }