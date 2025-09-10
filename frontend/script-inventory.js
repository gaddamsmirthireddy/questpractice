// Redirect if not logged in
if (localStorage.getItem('loggedIn') !== 'true') {
  alert('Please login first!');
  window.location.href = 'login.html';
}

// Logout button
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('cartItems');
  window.location.href = 'login.html';
});

// Product data
const products = [
  { id: 'r2901', name: "Cisco Router 2901", price: 1200, qty: 5,
    img: "https://images.pexels.com/photos/4610641/pexels-photo-4610641.jpeg" },
  { id: 'mx204', name: "Juniper MX204 Router", price: 3500, qty: 2,
    img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" },
  { id: 'c2960', name: "Cisco Catalyst 2960 Switch", price: 800, qty: 0,
    img: "https://images.pexels.com/photos/1181402/pexels-photo-1181402.jpeg" },
  { id: 'aruba2530', name: "Aruba 2530 Switch", price: 600, qty: 4,
    img: "https://images.pexels.com/photos/3735431/pexels-photo-3735431.jpeg" },
  { id: 'ubiquiti', name: "Ubiquiti UniFi AP", price: 150, qty: 10,
    img: "https://images.pexels.com/photos/1041621/pexels-photo-1041621.jpeg" },
  { id: 'mikrotik', name: "MikroTik RouterBOARD", price: 220, qty: 1,
    img: "https://images.pexels.com/photos/109573/pexels-photo-109573.jpeg" }
];

// DOM elements
const productList = document.getElementById('productList');
const cartCountSpan = document.getElementById('cartCount');
const notifications = document.getElementById('notifications');
const checkoutSection = document.getElementById('checkoutSection');
const totalCostSpan = document.getElementById('totalCost');
const checkoutBtn = document.getElementById('checkoutBtn');
const thankYouMessage = document.getElementById('thankYouMessage');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');

// Load cart
let cart = JSON.parse(localStorage.getItem('cartItems')) || {};
let cartCount = Object.values(cart).reduce((acc, val) => acc + val, 0);

cartCountSpan.textContent = cartCount;
updateCheckoutVisibility();

// Display products
function displayProducts() {
  productList.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p class="stock ${p.qty > 0 ? 'in' : 'out'}">
        ${p.qty > 0 ? `In Stock: ${p.qty}` : 'Out of Stock'}
      </p>
      <button class="addCartBtn" ${p.qty === 0 ? 'disabled' : ''}>Add to Cart</button>
    `;
    productList.appendChild(card);

    const addBtn = card.querySelector('.addCartBtn');
    addBtn.addEventListener('click', () => {
      if (p.qty > 0) {
        cart[p.id] = (cart[p.id] || 0) + 1;
        p.qty--;
        cartCount++;
        cartCountSpan.textContent = cartCount;
        localStorage.setItem('cartItems', JSON.stringify(cart));
        displayProducts();
        showNotification(`Added "${p.name}" to cart.`);
        updateCheckoutVisibility();
      }
    });
  });
}

// Show notifications
function showNotification(msg) {
  const notif = document.createElement('div');
  notif.classList.add('notification');
  notif.textContent = msg;
  notifications.appendChild(notif);
  setTimeout(() => notif.remove(), 3500);
}

// Update checkout section
function updateCheckoutVisibility() {
  const totalCost = Object.entries(cart).reduce((sum, [id, qty]) => {
    const prod = products.find(p => p.id === id);
    return prod ? sum + prod.price * qty : sum;
  }, 0);
  totalCostSpan.textContent = totalCost.toFixed(2);
  if(cartCount > 0) {
    checkoutSection.classList.remove('hidden');
  } else {
    checkoutSection.classList.add('hidden');
  }
}

// Checkout
checkoutBtn.addEventListener('click', () => {
  if(cartCount === 0) {
    alert("Cart is empty!");
    return;
  }
  thankYouMessage.classList.remove('hidden');
  checkoutSection.classList.add('hidden');
  cart = {};
  cartCount = 0;
  localStorage.removeItem('cartItems');
  cartCountSpan.textContent = 0;
  displayProducts();
});

// Continue shopping
continueShoppingBtn.addEventListener('click', () => {
  thankYouMessage.classList.add('hidden');
  updateCheckoutVisibility();
});

// Initial render
displayProducts();
