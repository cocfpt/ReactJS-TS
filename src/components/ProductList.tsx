import React, { useEffect, useState } from 'react';
import { List, Card, Spin, Rate, Tag, Typography } from 'antd';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  stock: number;
  discountPercentage: number;
  brand: string;
  tags: string[];
}

interface ProductListProps {
  searchQuery: string;
  shouldReset?: boolean;
  filters: { category: string[], tags: string[], brand: string[] };
}

const { Text } = Typography;

const ProductList: React.FC<ProductListProps> = ({ searchQuery, shouldReset, filters }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [scrollCount, setScrollCount] = useState(0);

  const loadMoreProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}&skip=${page * 5}&limit=5`
      );
      console.log('API Response:', response.data);
      
      const newProducts = response.data.products.map(p => ({
        ...p,
        tags: p.tags || [],
        brand: p.brand || 'Unknown',
        discountPercentage: p.discountPercentage || 0,
        stock: p.stock ?? 0
      }));
      setProducts(prevProducts => 
        page === 0 ? newProducts : [...prevProducts, ...newProducts]
      );
      setHasMore(newProducts.length === 5);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
      setScrollCount(0); // Reset counter after loading
    }
  };

  useEffect(() => {
    setPage(0);
    setHasMore(true);
    loadMoreProducts();
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200 &&
        !loading
      ) {
        setScrollCount(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  useEffect(() => {
    if (scrollCount >= 1) {
      loadMoreProducts();
    }
  }, [scrollCount]);

  useEffect(() => {
    if (shouldReset) {
      setProducts([]);
      setPage(0);
      setHasMore(true);
      loadMoreProducts();
    }
  }, [shouldReset]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
    const matchesTags = filters.tags.length === 0 || filters.tags.some(tag => product.tags.includes(tag));
    const matchesBrand = filters.brand.length === 0 || filters.brand.includes(product.brand);

    return matchesSearch && matchesCategory && matchesTags && matchesBrand;
  });

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={filteredProducts}
      renderItem={(product) => (
        <List.Item key={product.id}>
          <Card
            hoverable
            style={{ padding: 0 }}
          >
            <div style={{ 
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              padding: 12
            }}>
              <div style={{ 
                width: 150,
                flexShrink: 0,
                borderRadius: 8,
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  background: '#ff4d4f',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 'bold',
                  zIndex: 1,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  -{product.discountPercentage}%
                </div>
                <img
                  alt={product.title}
                  src={product.thumbnail}
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1/1',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div style={{ 
                flex: 1,
                minWidth: 0
              }}>
                <h2 style={{ 
                  marginBottom: 8,
                  fontSize: 16,
                  fontWeight: 500
                }}>
                  {product.title}
                </h2>

                <div style={{ 
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginBottom: 8
                }}>
                  <Tag color="blue">{product.category}</Tag>
                  <Tag color={product.stock > 0 ? "green" : "red"}>
                    Stock: {product.stock}
                  </Tag>
                  <Rate 
                    disabled 
                    defaultValue={product.rating} 
                    style={{ fontSize: 12 }}
                  />
                </div>

                <p style={{ 
                  color: '#666',
                  fontSize: 12,
                  marginBottom: 8,
                  lineHeight: 1.5
                }}>
                  {product.description}
                </p>

                <div style={{ 
                  display: 'flex',
                  gap: 12,
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: 18, color: '#1890ff' }}>
                    ${product.price}
                  </div>
                
                  <div style={{ fontSize: 12 }}>
                    <Text strong>Brand:</Text> {product.brand || 'N/A'}
                  </div>
                </div>

                <div style={{ marginTop: 8 }}>
                  <Text strong>Tags:</Text>
                  <div style={{ marginTop: 4 }}>
                    {product.tags?.map(tag => (
                      <Tag 
                        key={tag} 
                        style={{ 
                          margin: 4,
                          fontSize: 12,
                          padding: '2px 8px'
                        }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    >
      {loading && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Spin size="default" />
        </div>
      )}
    </List>
  );
};

export default ProductList;