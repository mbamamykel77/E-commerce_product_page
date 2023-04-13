let counter = 0;

let display = document.querySelector(".text_content");
let increment = document.querySelector(".increment");

let decrement = document.querySelector(".decrement");
let button = document.querySelector(".button");

let pop_up = document.querySelector(".pop_up");
let images = document.querySelectorAll(".images");

let mainImg = document.querySelector(".box_image");
let cart = document.querySelector(".cart");

let filledCart = document.querySelector(".filled");
let itemCount = document.querySelector(".item_count");

let totalAmount = document.querySelector(".total");
let span = document.querySelector("#span");

let deleteCart = document.querySelector(".delete");
let checkOut = document.querySelector(".filled_button");


// function increment
function incrementBtn() {
  counter++;
  display.textContent = counter;
  totalAmount.style.marginLeft = "0.5rem";
  totalAmount.style.color = "black";
}
increment.addEventListener("click", incrementBtn);

// function decrement
function decrementBtn() {
  if (counter !== 0) {
    counter--;
  }
  display.textContent = counter;
  totalAmount.style.marginLeft = "0.5rem";
  totalAmount.style.color = "black";
  if (counter == 0) {
    span.style.display = "none";
  }
}
decrement.addEventListener("click", decrementBtn);

// function Delete cart
function clearCart() {
    span.style.display = "none";
    filledCart.classList.remove("active1");
    filledCart.style.marginTop = "-380px";
    pop_up.classList.add("active");
    setTimeout(() => {
      pop_up.classList.remove("active");
    }, 3000);
  }
  deleteCart.addEventListener("click", clearCart);

// Action when cart is empty
function addCart() {
  if (counter === 0) {
    itemCount.textContent = counter;
    let amount = 125 * Number(itemCount.textContent);
    totalAmount.textContent = "$ " + amount + ".00";
    pop_up.classList.add("active");
    filledCart.classList.remove("active1");
    filledCart.style.marginTop = "-380px";
    setTimeout(() => {
      pop_up.classList.remove("active");
    }, 3000);

    // decrease cart content with item and init picked
    if (counter !== 0) {
      counter--;
      itemCount.textContent = counter;
      let amount = 125 * Number(itemCount.textContent);
      totalAmount.textContent = "$ " + amount + ".00";
    }
    // increase cart content with item and unit picked
  } else if (counter > 0) {
    itemCount.textContent = counter;
    let amount = 125 * Number(itemCount.textContent);
    totalAmount.textContent = "$ " + amount + ".00";
    span.style.display = "block";
    span.textContent = counter;
  }
}
button.addEventListener("click", addCart);

// Add pop_up when cart is filled
function cartFilled() {
  filledCart.classList.add("active1");
  filledCart.style.marginTop = "380px";
//   if (counter == 0){
//     filledCart.style.display = 'none'
//   }
//   if(counter > 0){
//     filledCart.style.display = 'block'
//   }
}
cart.addEventListener("click", cartFilled);

// function to select image display
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    mainImg.src = this.src;
  });
}

//  menu bar
function openNav() {
  document.querySelector(".desktop_menu").style.width = "250px";
}

function closeNav() {
  document.querySelector(".desktop_menu").style.width = "0";
}
