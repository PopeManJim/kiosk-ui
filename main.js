import { fetchProducts } from './shopify-api.js';

let allProducts = [];

async function loadProducts() {
  allProducts = await fetchProducts();
  renderProducts(allProducts);
}

function renderProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
    `;
    container.appendChild(card);
  });
}

document.getElementById('search-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allProducts.filter(product =>
    product.title.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

loadProducts();


