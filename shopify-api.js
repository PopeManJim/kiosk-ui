export async function fetchProducts() {
  try {
    const response = await fetch('https://the-surprise-shop.com/products.json');
    const data = await response.json();

    return data.products.map(product => ({
      title: product.title,
      price: product.variants[0].price,
      image: product.images[0]?.src || 'https://via.placeholder.com/300x300?text=No+Image'
    }));
  } catch (error) {
    console.error('Error fetching Shopify products:', error);
    return [];
  }
}



