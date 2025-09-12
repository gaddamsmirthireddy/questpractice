const apiUrl = 'http://localhost:5000/api/products';

const loadProducts = async () => {
  const res = await fetch(apiUrl);
  const products = await res.json();

  const tableBody = document.getElementById('inventoryTableBody');
  tableBody.innerHTML = '';
  products.forEach(product => {
    tableBody.innerHTML += `<tr>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.quantity}</td>
      <td>${product.price}</td>
      <td>${product.supplier?.name || 'N/A'}</td>
    </tr>`;
  });
};

window.addEventListener('DOMContentLoaded', loadProducts);
