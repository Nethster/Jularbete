const wishlistContent = document.querySelector(".wishlist-content")
const wishlistOverlay = document.querySelector('.wishlist');

// creating an empty array for the wishlist 
let wishlist = JSON.parse(localStorage.getItem("WISHLIST")) || []; 
updateWishlist() 



function addToWishlist(id) {
    if (wishlist.some((item) => item.id === id)) {
    } else {
        const item = productList.find((product) => product.id === id);
        console.log(id)
        wishlist.push({
            ...item, 
        });       
    }
    updateWishlist()
} 

function updateWishlist(){
    renderWishlistItem(); 
    localStorage.setItem("WISHLIST", JSON.stringify(wishlist))
}

function renderWishlistItem() {
    wishlistContent.innerHTML = ""; 
    // if list is undefined " " skriv i docs listan är tomt 

    //
    wishlist.forEach((item) => { 
        wishlistContent.innerHTML += `
        <div class="wishlist-item">
            <div class="item-info" onclick="removeItemFromWishlist(${item.id})">
                <img src="./images/${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                ${item.price} SEK
            </div>
            <button class="add-to-cart" title="Add to Shopping Cart" onclick="addToCart(${item.id})">
            <span class="material-icons">&#xe148;</span>
            </button>
        </div>
      `;

    })
}

function removeItemFromWishlist(id) {
    wishlist = wishlist.filter((item) => item.id !==id); 
    updateWishlist(); 
} 

const showWishlist = () => {
    wishlistContent.classList.add("show");
    wishlistOverlay.classList.add("show");
  }
  
  const hideWishlist = () => {
    wishlistContent.classList.remove("show");
    wishlistOverlay.classList.remove("show");
  }