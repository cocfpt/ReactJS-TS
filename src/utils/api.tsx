import axios from 'axios';

export const fetchProducts = async (searchQuery: string, page: number, limit: number = 5) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchQuery}&skip=${page * limit}&limit=${limit}`
    );

    // Extract only the necessary fields for filtering and display
    return response.data.products.map((product: any) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      tags: product.tags || [],
      brand: product.brand || 'Unknown',
      thumbnail: product.thumbnail,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}; 