const shoppingCart = document.querySelector(".cart");
const cartContent = document.querySelector(".cart-content");
const openCartButton = document.querySelector(".cart-icon");
const closeCartButton = document.querySelector(".close-cart-button");
const overlay = document.querySelector(".cart-overlay");
const cartTotal = document.querySelector(".cart-total");
const clearCartButton = document.querySelector(".clear-cart-button");
const itemTotals = document.querySelector(".item-total");

let cart = [];
let addButtons = [];

const getButtons = () => {
    const buttons = [...document.querySelectorAll(".add-to-cart")];
    addButtons = buttons;
    buttons.forEach(button => {

      const id = button.dataset.id;
      const inCart = cart.find(item => item.id === parseInt(id, 10));

      button.addEventListener("click", e => {
        e.preventDefault();
        const cartItem = { ...Storage.getProduct(id), amount: 1 };

        // Add product to cart
        cart = [...cart, cartItem];

        // Save the cart in local storage
        Storage.saveCart(cart);

        // Set cart values
        this.setItemValues(cart);

        // Display the cart item
        this.addCartItem(cartItem);
      });
    });
}
