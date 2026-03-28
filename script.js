/* =====================
   PRODUCT DATA
===================== */
const products = [
  {
    id: 1,
    name: "Arduino Uno R3",
    price: 42000,
    image: "images/Arduino Uno Board.png",
    description: "Digital Pin 14 ခု နှင့် Analog Pin 6 ခုပါဝင်ပြီး ၊ Arduino IDE နှင့် Programming သွင်း ကာ Project များစွာ ပြုလုပ် နိုင်သည်။ Beginner သမားများအတွက် အလွန်အဆင်ပြေသော Board တစ်ခုဖြစ်သည်။",
    stock: 2
  },
  {
    id: 2,
    name: "Color Yellow LED (5mm)",
    price: 150,
    image: "images/LED Yellow 5mm.png",
    description: "အလင်းအားကောင်းပြီး Circuit တွေ မှာ အရမ်းအသုံးဝင်တဲ့  မီးသီးလေးဖြစ်ပြီး၊ အချင်း (5mm) ရှိသော LED လေးဖြစ်ပါ တယ်ခင်ဗျာ့။ Binary operating system မှာ indicator အနေနဲ့ အသုံးပြုလို့ အရမ်းကောင်းတဲ့ Yellow LED လေးပါ ခင်ဗျာ့ ။ ",
    stock: 100
  },
  {
    id: 3,
    name: "SG90 Servo Motor",
    price: 12000,
    image: "images/The-SG90-Servo-Motor.png",
    description: "Robots လေးတွေဖန်တီးချင်သူတွေ တခြားသောလှုပ်ရှားနိုင်တဲ့အစိတ်အပိုင်းလေးတွေ ဖန်တီးချင်သူတွေ၊Auto motion robots  လေးတွေကို ကိုယ်တိုင် ပြုလုပ်ချင်သူတွေ အတွက် အရမ်းအသုံးဝင် ပြီး quality ကောင်းတဲ့ 180 Degree Servo Motor လေးပါ ခင်ဗျာ့။",
    stock: 5
  },
{
    id: 4,
    name: "Color Blue LED (5mm) ",
    price: 150,
    image: "images/Blue Color LED.png",
    description: "အိမ် တွင်းအလှဆင်ဖို့အတွက်သုံးမလား? ညမီးအဖြစ်ပဲ့သုံးမလား? ဒါမှမဟုတ် ကိုယ့် ရဲ့ Circuit မှာ Circuit က အလုပ်လုပ်နေသလားမလုပ်ဘူးလား ဆိုတာကို Indicator အဖြစ်ပြပေးတဲ့မီးသီးအဖြစ်သုံးမလား? ကိုယ့် စိတ်ကြိုက် လိုသလိုအသုံးပြုလို့ကောင်းမဲ့ Blue Color LED လေးပါခင်ဗျာ့။",
    stock: 100
  },
{
    id: 5,
    name: "Color RED  LED (5mm) ",
    price: 150,
    image: "images/RED COLOR LED.png",
    description: "သင့်ရဲ့ Circuit မှာ အချက်ပြပေးမဲ့ မီးသီးလိုမျိုးကိုအသုံးပြုချင်ပါသလား? ဒါ မှမဟုတ် Circuit အဖွင့်အပိတ် စနစ်အဖြစ် indicator လိုမျိုးအသုံးပြုချင်သလား? ကိုယ့်စိတ်ကြိုက်အသုံးပြုလို့ အဆင်ပြေနိုင်တဲ့ RED LED လေးပါခင်ဗျာ့။ ",
    stock: 100
  },
{
    id: 6,
    name: "IRFZ44N MOSFET",
    price: 3500,
    image: "images/IRFZ44N.png",
    description: "အိမ်တွင်း project တွေမှာ power control လုပ်ဖို့သုံးမလား? Motor, LED strip, heater လို load တွေကို switch လုပ်ဖို့သုံးမလား?ဒါမှမဟုတ် Arduino project မှာ high current device တွေကို safe ဖြစ်အောင် control လုပ်ဖို့ သုံးမလား?ကိုယ့် circuit ကိုပိုပြီး အားကောင်းအောင် ထိန်းချုပ်ပေးနိုင်မဲ့ IRFZ44N MOSFET လေးပါခင်ဗျာ့။",
    stock: 5
  },
{
    id: 7,
    name: "6x6x5mm Push Button",
    price: 200,
    image: "images/Push Button Switch 6x6x5mm.png",
    description: "အသေးစား LED အဖွင့် အပိတ် Circuit  တွေ ၊ Arduino board နဲ့ တွဲ သုံးပြီး Input Logic အဖြစ် အသုံးပြုလို့ ရတဲ့ Push Button အမျိုး အစားလေးပါ ခင်ဗျာ့။ L=6mm , W=6mm , H=5mm ရှိပါ တယ်ခင်ဗျာ့။",
    stock: 20
  },
{
    id: 8,
    name: "HC-SR04-9 Ultrasonic Sensor",
    price: 5000,
    image: "images/Ultrasonic-Sensor-HC-SR04-9.png",
    description: "အကွာ အဝေးတိုင်းတာတဲ့ Project တွေ အတွက် အရမ်းအဆင်ပြေပြီး Arduino board တွေ နဲ့ တွဲဖက် အသုံပြုလို့ ကောင်းတဲ့ Module လေးဖြစ်ပါ တယ်ခင်‌ဗျာ့။",
    stock: 3
  },
{
    id: 9,
    name: "Dip Switch 2 position",
    price: 500,
    image: "images/Dip Switch 2 position.png",
    description: "အသုံးပြုရလွယ်ကူသော DIP Switch အမျိုးအစာဖြစ်ပြီး Switch တစ်ခုချင်းစီကို ON/OFF အနေဖြင့် ထိန်းချုပ်နိုင်သော 2 position အမျိုးအစားဖြစ်ပါတယ်ဗျာ့။အရွယ်အစားသေးငယ်ပြီး PCB board တွေမှာ  တပ်ဆင်ရလွယ်ကူပါတယ်။တည်ငြိမ်သော switching လုပ်ဆောင်ချက်ရှိပြီး setting နှင့် configuration များအတွက် အသုံးပြုရန် အဆင်ပြေစေတဲ့ DIP Switch ဖြစ်ပါ တယ်ခင်ဗျ့ာ။",
    stock: 3
  },
{
    id: 10,
    name: "Dip Switch 4 position",
    price: 800,
    image: "images/Dip Switch 4 position.png",
    description: "အသုံးပြုရလွယ်ကူသော DIP Switch အမျိုးအစာဖြစ်ပြီး Switch တစ်ခုချင်းစီကို ON/OFF အနေဖြင့် ထိန်းချုပ်နိုင်သော 4 position အမျိုးအစားဖြစ်ပါတယ်ဗျာ့။အရွယ်အစားသေးငယ်ပြီး PCB board တွေမှာ  တပ်ဆင်ရလွယ်ကူပါတယ်။တည်ငြိမ်သော switching လုပ်ဆောင်ချက်ရှိပြီး setting နှင့် configuration များအတွက် အသုံးပြုရန် အဆင်ပြေစေတဲ့ DIP Switch ဖြစ်ပါ တယ်ခင်ဗျ့ာ။",
    stock: 3
  },
  {
    id: 11,
    name: "Dip Switch 6 position",
    price: 800,
    image: "images/Dip Switch 6 position.png",
    description: "အသုံးပြုရလွယ်ကူသော DIP Switch အမျိုးအစာဖြစ်ပြီး Switch တစ်ခုချင်းစီကို ON/OFF အနေဖြင့် ထိန်းချုပ်နိုင်သော 6 position အမျိုးအစားဖြစ်ပါတယ်ဗျာ့။အရွယ်အစားသေးငယ်ပြီး PCB board တွေမှာ  တပ်ဆင်ရလွယ်ကူပါတယ်။တည်ငြိမ်သော switching လုပ်ဆောင်ချက်ရှိပြီး setting နှင့် configuration များအတွက် အသုံးပြုရန် အဆင်ပြေစေတဲ့ DIP Switch ဖြစ်ပါ တယ်ခင်ဗျ့ာ။",
    stock: 3
  },
{
    id: 12,
    name: "Dip Switch 5 position",
    price: 800,
    image: "images/Dip Switch 5 position.png",
    description: "အသုံးပြုရလွယ်ကူသော DIP Switch အမျိုးအစာဖြစ်ပြီး Switch တစ်ခုချင်းစီကို ON/OFF အနေဖြင့် ထိန်းချုပ်နိုင်သော 5 position အမျိုးအစားဖြစ်ပါတယ်ဗျာ့။အရွယ်အစားသေးငယ်ပြီး PCB board တွေမှာ  တပ်ဆင်ရလွယ်ကူပါတယ်။တည်ငြိမ်သော switching လုပ်ဆောင်ချက်ရှိပြီး setting နှင့် configuration များအတွက် အသုံးပြုရန် အဆင်ပြေစေတဲ့ DIP Switch ဖြစ်ပါ တယ်ခင်ဗျ့ာ။",
    stock: 3
  },
  {
    id: 13,
    name: "16x2 LCD Blue backlight",
    price: 12000,
    image: "images/LCD Blue backlight.png",
    description: " အမည်လေးတွေ ပေါ် အောင် လုပ်ချင်လား? ဒါမှမဟုတ် 2D Game လေးကိုဖန်တီး ပြီး LCD ပေါ် မှာ နိပ် လို့ ရ‌အောင် ဖန်တီးချင်သလား? ဒီ Blue backlight LCD လေးကသင့် အတွက် အဆင်ပြေစေမှာပါနော်။ ",
    stock: 8
  },
    {
    id: 14,
    name: "CD4017 IC",
    price: 1200,
    image: "images/CD4017 IC.png",
    description: "LED Chaser Circuit ဖန်တီးချင်သူများ ဘုရားနောက်ခံ မီးပြုလုပ်ချင်သူများအတွက် အထူးသင့်လျော်တဲ့ CD4017 IC လေးပါခင်ဗျာ့။",
    stock: 10
  },
    {
    id: 15,
    name: "IR LED",
    price: 500,
    image: "images/IRLED.png",
    description: "Arduino board နဲ့ တွဲသုံးပြီး TV Remote အဖြစ်အသုံးပြုလို့ ရတဲ့ IR LED လေးပါ ခင်ဗျာ့ ",
    stock: 5
  },
  {
    id: 16,
    name: "8 Pin IC socket",
    price: 300,
    image: "images/8-pin IC socket.png",
    description: " Project လုပ် တဲ့အခါ Circuit တွေ ကို ခဲဆော်ရင် IC အပူလွန်ကဲပြီးပျက်စီးသွားတာတို့ ၊ Circuit ကို Voltage အမြင့်ပေးမိလို့ IC ကျွမ်းသွားတာတို့ဖြစ်သွားရင် အလွယ်တကူ ဖြုတ်/တပ် လို့ရအောင် အသုံးပြုလို့ရတဲ့ 8 Pin IC Socket လေးပါ ခင်ဗျာ့။",
    stock: 5
  },
  {
    id: 17,
    name: "7x9cm universal PCB",
    price: 2000,
    image: "images/7x9cm universal PCB.png",
    description: "ကိုယ်ပိုင် Circuits ဖန်တီးချင်တဲ့ Beginners သမားလေးများအတွက် အထူးအဆင်ပြေမဲ့ Universal PCB Board လေးပါခင်ဗျာ့။",
    stock: 5
  },
  {
    id: 18,
    name: "16MHZ Crystal Oscillator",
    price: 400,
    image: "images/16MHZ_Crystal.png",
    description: "ATMEGA 328P Microcontroller IC နဲ့ တွဲ သုံးပြီး ကိုယ်ပိုင် Stand alone Arduino board တည်ဆောက်တဲ့ အခါ အသုံးပြလို့ ရတဲ့ Oscillatro ပါ ခင်ဗျာ့။",
    stock: 5
  },
  {
    id: 19,
    name: "9V battery socket",
    price: 400,
    image: "images/9V battery socket.png",
    description: "သင့်ရဲ့ Circuit မှာ Battery ကို အဖြုတ်အတပ်လွယ်ကူစေမှာဖြစ်ပြီး Battery ပျက်စိးသွားပါကလွယ်ကူစွာလှဲနိုင်အောင် အသုံးပြလို့ရမဲ့ Battery Socket လေးပါခင်ဗျာ့။",
    stock: 5
  },
  {
    id: 20,
    name: "9V Battery Clip with barrel jack",
    price: 400,
    image: "images/9V-Battery-Clip-with-barrel-jack.png",
    description: "အသုံးပြုရလွယ်ကူပြီးတပ် ဆင်ရအဆင်ပြေစေမဲ့ Battery Clip with barrel jack လေးဖြစ်ပါတယ်ဗျာ့။Circuits တွေမှာ တပ်ဆင်ရလွယ်ကူပြီး အလွန်အသုံးဝင်စေနိုင်မဲ့ Battery Jack လေးဖြစ်ပါတယ်ဗျာ့။",
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
   🔥 GENERATE QR (TEXT ONLY)
===================== */
function generateQR() {
  if (!cart || Object.keys(cart).length === 0) {
    alert("Cart is empty");
    return;
  }

  let orderText = "";
  let totalPrice = 0;

  for (let id in cart) {
    const product = products.find(p => p.id == id);
    if (!product) continue;

    const qty = cart[id];
    const subTotal = product.price * qty;
    totalPrice += subTotal;

    orderText += product.name + " x " + qty + 
                 " = " + subTotal.toLocaleString() + " Ks\n";
  }

  // ✅ total price ထည့်
  orderText += "\nTotal = " + totalPrice.toLocaleString() + " Ks";

  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  new QRCode(qrDiv, {
    text: orderText,
    width: 220,
    height: 220
  });
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
          <button onclick="addToCart(${item.id})" ${item.stock === 0 ? "disabled" : ""}>
            ${item.stock === 0 ? "Out of Stock" : "Add To Cart"}
          </button>
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
  document.getElementById("oPrice").innerText =
    "Price: " + p.price.toLocaleString() + " Ks";
  document.getElementById("oStock").innerText =
    "Stock: " + p.stock;
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}