// Replace with your actual Shopify store and access token if needed
const SHOPIFY_STORE = 'your-store-name.myshopify.com';
const PRODUCTS_ENDPOINT = `https://${SHOPIFY_STORE}/products.json`;

async function fetchProducts() {
  try {
    const response = await fetch(PRODUCTS_ENDPOINT);
    const data = await response.json();
    renderProducts(data.products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

function renderProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.images[0]?.src || 'https://via.placeholder.com/300x300?text=No+Image'}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>$${product.variants[0].price}</p>
    `;

    container.appendChild(card);
  });
}

fetchProducts();

