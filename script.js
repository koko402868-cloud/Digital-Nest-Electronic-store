/* =====================
   PRODUCT DATA (OFFLINE)
===================== */
const products = [
  {
    id: 1,
    name: "Arduino Uno R3",
    price: 42000,
    image: "images/Arduino Uno Board.png",
    description: "ATmega328, 5V, 14 Digital Pins, 6 Analog Pins",
    stock: 2
  },
  {
    id: 2,
    name: "Color Yellow LED (5mm)",
    price: 150,
    image: "images/LED Yellow 5mm.png",
    description: "High brightness LED",
    stock: 0
  },
  {
    id: 3,
    name: "SG90 Servo Motor",
    price: 12000,
    image: "images/The-SG90-Servo-Motor.png",
    description: "180 Degree Servo Motor",
    stock: 5
  }
];

/* =====================
   CART SYSTEM
===================== */
let cart = JSON.parse(localStorage.getItem("cart")) || {};

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let total = 0;
  for (let id in cart) total += cart[id];
  const el = document.getElementById("cartCount");
  if (el) el.innerText = total;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product.stock === 0) return alert("Out of Stock");

  if (!cart[id]) cart[id] = 0;
  if (cart[id] < product.stock) {
    cart[id]++;
  } else {
    alert("Stock limit reached");
  }

  saveCart();
}

function goToCart() {
  window.location.href = "cart.html";
}

/* =====================
   RENDER PRODUCTS
===================== */
renderProducts(products);
updateCartCount();

function renderProducts(list) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(item => {
    let label = "";
    if (item.stock === 0)
      label = `<div class="stock-label">OUT OF STOCK</div>`;
    else if (item.stock <= 5)
      label = `<div class="stock-label low-stock">LOW STOCK</div>`;

    container.innerHTML += `
      <div class="card">
        ${label}
        <img src="${item.image}" onclick="openOverlay(${item.id})">
        <div class="info">
          <h3>${item.name}</h3>
          <p class="price">${item.price.toLocaleString()} Ks</p>
          <button onclick="addToCart(${item.id})">Add To Cart</button>
        </div>
      </div>
    `;
  });
}

/* =====================
   SEARCH
===================== */
function searchProducts() {
  const text = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(text)
  );
  renderProducts(filtered);
}

/* =====================
   OVERLAY
===================== */
function openOverlay(id) {
  const p = products.find(x => x.id === id);

  document.getElementById("overlay").style.display = "flex";
  document.getElementById("oImg").src = p.image;
  document.getElementById("oName").innerText = p.name;
  document.getElementById("oDesc").innerText = p.description;
  document.getElementById("oPrice").innerText = "Price: " + p.price.toLocaleString() + " Ks";

  const stock = document.getElementById("oStock");
  stock.innerText = "Stock: " + p.stock;
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
