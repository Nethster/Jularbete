// Creating and connecting variables to the page elements
const shoppingCart = document.querySelector(".cart");
const cartContent = document.querySelector(".cart-content");
const openCartButton = document.querySelector(".cart-icon");
const closeCartButton = document.querySelector(".close-cart-button");
const overlay = document.querySelector(".cart-overlay");
const cartTotal = document.querySelector(".cart-total");
const clearCartButton = document.querySelector(".clear-cart-button");
const itemTotals = document.querySelector(".item-total");
const cartFooter = document.querySelector(".cart-footer");
const successMessage = document.querySelector(".success-message");

// Creating an empty cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Adding items to the cart
function addToCart(id) {
  // Сhecking if the item already is in the cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = productList.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// Updating the cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  localStorage.setItem("CART", JSON.stringify(cart));
}

// Calculating and rendering subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  cartTotal.innerHTML = `${totalItems} item(s) ${totalPrice.toFixed(2)}`;
  itemTotals.innerHTML = totalItems;
}

// Rendering cart items
function renderCartItems() {
  cartContent.innerHTML = "";
  cart.forEach((item) => {
    cartContent.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="./images/${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                ${item.price} SEK
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// Removing the item from the cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// Changing number of units for a product
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}

// Showing/hiding the cart

const show = () => {
  shoppingCart.classList.add("show");
  overlay.classList.add("show");
}

const hide = () => {
  shoppingCart.classList.remove("show");
  overlay.classList.remove("show");
}

// Clearing the cart

const clearTheCart = () => {
  cart = [];
  updateCart();
}

// Showing the success message

const showSuccessMessage = () => {
  hide();
  clearTheCart();
  successMessage.classList.add("show");
}

const hideSuccessMessage = () => {
  successMessage.classList.remove("show");
}