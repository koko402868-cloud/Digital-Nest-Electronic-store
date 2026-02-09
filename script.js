/* =====================
   PRODUCT DATA (OFFLINE)
===================== */
const products = [
  {
    id: 1,
    name: "Arduino Uno R3",
    price: "42,000 Ks",
    image: "images/Arduino Uno Board.png",
    description: "ATmega328, 5V, 14 Digital Pins, 6 Analog Pins",
    stock: 2
  },
  {
    id: 2,
    name: "Color Yellow LED (5mm)",
    price: "150 Ks",
    image: "images/LED Yellow 5mm.png",
    description: "High brightness LED",
    stock: 0
  },
  {
    id: 3,
    name: "SG90 Servo Motor",
    price: "12,000 Ks",
    image: "images/The-SG90-Servo-Motor.png",
    description: "180 Degree Servo Motor",
    stock: 5
  }
];

/* =====================
   RENDER PRODUCTS
===================== */
renderProducts(products);

function renderProducts(list) {
  const container = document.getElementById("products");
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
          <p class="price">${item.price}</p>
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
  document.getElementById("oPrice").innerText = "Price: " + p.price;

  const stock = document.getElementById("oStock");
  if (p.stock === 0) {
    stock.innerText = "OUT OF STOCK";
    stock.style.color = "red";
  } else if (p.stock <= 5) {
    stock.innerText = "LOW STOCK";
    stock.style.color = "orange";
  } else {
    stock.innerText = "IN STOCK";
    stock.style.color = "green";
  }
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
