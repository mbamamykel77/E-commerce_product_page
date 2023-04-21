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
let cartNumber = document.querySelector("#span");

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
}
decrement.addEventListener("click", decrementBtn);

// function add to cart
function addCart() {
  if (counter > 0) {
    // filledCart.classList.add("active1");
    pop_up.classList.remove('active')
    itemCount.textContent = counter;
    let amount = 125 * Number(itemCount.textContent);
    totalAmount.textContent = "$ " + amount + ".00";
    cartNumber.style.display = "block";
    cartNumber.textContent = counter;
  }
}
button.addEventListener("click", addCart);

// function clear cart
function clearCart() {
  filledCart.classList.remove("active1");
  cartNumber.style.display = "none";
  pop_up.classList.add("active");
  setTimeout(() => {
    pop_up.classList.remove("active");
  }, 3000);
}
deleteCart.addEventListener("click", clearCart);

// click on cart
cart.addEventListener("click", () => {
  filledCart.classList.toggle("active1");
  filledCart.style.marginTop = "380px";
});

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
