document.addEventListener('DOMContentLoaded', () => {
  // Placeholder: eventually this will fetch products from Shopify
  const placeholderProducts = [
    { title: "Mystery Booster Pack", price: "$4.99" },
    { title: "Funko Pop! Naruto", price: "$11.99" },
  ];

  const container = document.getElementById('product-list');
  placeholderProducts.forEach(product => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${product.title}</strong><br>${product.price}`;
    div.style.padding = '1rem';
    div.style.background = 'white';
    div.style.borderRadius = '12px';
    container.appendChild(div);
  });
});
