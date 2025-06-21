export async function fetchProducts() {
  const response = await fetch('https://the-surprise-shop.com/products.json');

  if (!response.ok) {
    console.error('Failed to fetch products:', response.statusText);
    return [];
  }

  const data = await response.json();

  return data.products.map(product => ({
    title: product.title,
    price: product.variants[0]?.price || 'N/A',
    image: product.images[0]?.src || 'https://via.placeholder.com/300x300?text=No+Image',
    handle: product.handle
  }));
}

