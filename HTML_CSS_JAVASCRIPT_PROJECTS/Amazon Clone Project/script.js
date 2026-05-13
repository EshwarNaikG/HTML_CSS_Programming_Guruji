const products = [
  {
    id: 1,
    name: "Headphones",
    category: "Electronics",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },

  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },

  {
    id: 3,
    name: "Shoes",
    category: "Fashion",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },

  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    price: 55999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },

  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657"
  },

  {
    id: 6,
    name: "Shoes",
    category: "Fashion",
    price: 45999,
    image: "https://tse2.mm.bing.net/th/id/OIP.a-YDWw7IcFGxYeuz_1wUrgHaHa?pid=Api&h=220&P=0&w=220"
  },

   {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://tse1.mm.bing.net/th/id/OIP.x87cwBwgl9KqUbetx_7DcQHaE8?pid=Api&h=220&P=0&w=220"
  },

   {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://tse4.mm.bing.net/th/id/OIP.CzypDkPK8tNwc5jP9VoEIgHaES?pid=Api&h=220&P=0&w=220"
  },

   {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://tse3.mm.bing.net/th/id/OIP.PqhIhSTMtLiy5xkhX-K__wHaEo?pid=Api&h=220&P=0&w=220"
  },

   {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://tse4.mm.bing.net/th/id/OIP.bDPcrMiaCWQaTot1JarCIQHaJd?pid=Api&h=220&P=0&w=220"
  },

   {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://tse1.mm.bing.net/th/id/OIP.x87cwBwgl9KqUbetx_7DcQHaE8?pid=Api&h=220&P=0&w=220"
  },

   {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657"
  },

   {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1999,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657"
  },

];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

// Display Products

function displayProducts(){

  products.forEach(product => {

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `;

    productList.appendChild(productDiv);

  });

}

// Add To Cart

function addToCart(id){

  const product = products.find(p => p.id === id);

  cart.push(product);

  updateCart();

}

// Update Cart

function updateCart(){

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item,index) => {

    total += item.price;

    const li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-btn"
      onclick="removeFromCart(${index})">
      Remove
      </button>
    `;

    cartItems.appendChild(li);

  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total;

}

// Remove From Cart

function removeFromCart(index){

  cart.splice(index,1);

  updateCart();

}

// Initial Load

displayProducts();



document.getElementById("searchInput")
.addEventListener("keyup", function(){

  const value = this.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  displayFilteredProducts(filteredProducts);

});

function displayFilteredProducts(items){

  productList.innerHTML = "";

  items.forEach(product => {

    const productDiv = document.createElement("div");

    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">
      Add to Cart
      </button>
    `;

    productList.appendChild(productDiv);

  });

}


function filterProducts(category){

  if(category === "All"){
    displayFilteredProducts(products);
    return;
  }

  const filtered = products.filter(product =>
    product.category === category
  );

  displayFilteredProducts(filtered);

}

