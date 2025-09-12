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

let products = []; // Will be fetched from backend

// Fetch products from backend API
async function fetchProducts() {
  try {
    const res = await fetch('http://localhost:5000/api/products'); // Update if needed
    products = await res.json();
    displayProducts();
  } catch (err) {
    console.error('Error fetching products:', err);
    showNotification('Error loading products from server.');
  }
}

// Display products dynamically
function displayProducts() {
  productList.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${p.img || 'https://via.placeholder.com/150'}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p class="stock ${p.quantity > 0 ? 'in' : 'out'}">
        ${p.quantity > 0 ? `In Stock: ${p.quantity}` : 'Out of Stock'}
      </p>
      <button class="addCartBtn" ${p.quantity === 0 ? 'disabled' : ''}>Add to Cart</button>
    `;
    productList.appendChild(card);

    const addBtn = card.querySelector('.addCartBtn');
    addBtn.addEventListener('click', () => {
      if (p.quantity > 0) {
        cart[p._id] = (cart[p._id] || 0) + 1;
        p.quantity--;
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
    const prod = products.find(p => p._id === id);
    return prod ? sum + prod.price * qty : sum;
  }, 0);
  totalCostSpan.textContent = totalCost.toFixed(2);
  checkoutSection.classList.toggle('hidden', cartCount === 0);
}

// Checkout
checkoutBtn.addEventListener('click', () => {
  if (cartCount === 0) {
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

// Initial fetch and render
fetchProducts();
