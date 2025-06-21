const SHOPIFY_STORE = 'the-surprise-shop.myshopify.com'; // replace with your store if different
const PRODUCTS_ENDPOINT = `https://${SHOPIFY_STORE}/products.json`;

export async function fetchProducts() {
  try {
    const response = await fetch(PRODUCTS_ENDPOINT);
    const data = await response.json();

    // Normalize and simplify
    return data.products.map(product => ({
      id: product.id,
      title: product.title,
      image: product.images[0]?.src || 'https://via.placeholder.com/300x300?text=No+Image',
      price: product.variants[0]?.price || '0.00'
    }));
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}



