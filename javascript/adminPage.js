const productEl = document.querySelector(".created-products-container");

function renderProducts() {
  let listString = "";

  let savedList = loadProducts();

  if (savedList !== null) {
    productList = savedList;
  }

  productList.forEach((product) => {
    listString += `
    <li>
            <img src="./images/${product.img}" class="product__image" alt="">
            <h3>${product.name}</h3>
            <h4>${product.price} SEK</h4>
            <button class="add-to-favorites" title="Add to favorites" onclick="addToWishlist(${product.id})">
                <img src="images/favorite_border_black_24dp.svg" alt="">
            </button>
            <button class="add-to-cart" title="Add to Shopping Cart" onclick="addToCart(${product.id})">
                <span class="material-icons">&#xe148;</span>
            </button>
    </li> 
    `;
  });

  listString = "<ul>" + listString + "</ul>";
  productEl.innerHTML = listString;
}

function addProduct() {
  let name = document.querySelector("#name").value;
  let price = document.querySelector("#price").value;
  let img = document.querySelector("#chooseFile").files[0].name;
  let index = productList.length + 1;
  let newItem = {
    id: index,
    name: name,
    price: price,
    img: img,
    addtowish: false,
  };

  productList.push(newItem);
  localStorage.setItem("keta", JSON.stringify(productList));
}

function loadProducts() {
  const products = localStorage.getItem("keta");

  if (products !== null) {
    const productList = JSON.parse(products);
    return productList;
  }

  return null;
}

renderProducts();

