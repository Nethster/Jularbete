const wishlistContent = document.querySelector(".wishlist-content")
const wishlistOverlay = document.querySelector('.wishlist');

// creating an empty array for the wishlist 
let wishlist = JSON.parse(localStorage.getItem("WISHLIST")) || []; 
updateWishlist() 



function addToWishlist() {
    if (wishlist.some((item) => item.id !== id)) {
        const item = productList.find((product) => product.id === id);
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
        </div>
      `;

    })

}

function removeItemFromWishlist() {
    wishlist = wishlist.filter((item) => item.id !==id); 
    updateWishlist(); 
} 
