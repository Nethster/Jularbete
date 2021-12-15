const productEl = document.querySelector(".product-list-wrapper"); 

function renderProducts() {

    let listString = "";
    
    let savedList = loadProducts()

    if (savedList !== null) {
        productList = savedList
    }
    
    productList.forEach( (product) =>  {

    listString += `
    <li>
            <img src="images/pot-1.jpg" class="product__image" alt="">
            <h3>White pot 1</h3>
            <h4>30 SEK</h4>
            <button class="add-to-favorites" title="Add to favorites">
                <img src="images/favorite_border_black_24dp.svg" alt="">
            </button>
            <button class="add-to-cart" title="Add to Shopping Cart">
                <span class="material-icons">&#xe148;</span>
            </button>
    </li> 
    `
    })

    listString = '<ul>' + listString + '</ul>';
    productEl.innerHTML = listString
} 

function addProduct() {
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const img = "trorlladsada"
    
      let newItem = {
        name,
        price,
        img,
    }
    
    productList.push(newItem);
    localStorage.setItem("keta", JSON.stringify(productList)); 
} 

function loadProducts() {
    const products = localStorage.getItem("keta")

    if (products !== null) {
        const productList = JSON.parse(products)
        return productList
    }

    return null
} 

