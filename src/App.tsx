import React, { useState } from 'react';
import { Layout } from 'antd';
import ProductList from './components/ProductList';
import SearchFilter from './components/SearchFilter';
import StaticSidebar from './components/StaticSidebar';
import './styles.css';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [resetTrigger, setResetTrigger] = useState(false);
  const [filters, setFilters] = useState<{ category: string[], tags: string[], brand: string[] }>({
    category: [],
    tags: [],
    brand: []
  });

  // Xử lý click logo - reset toàn bộ trạng thái
  const handleLogoClick = () => {
    setInputValue('');
    setSearchQuery('');
    setResetTrigger(prev => !prev);
    // Thêm scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Hiệu ứng cuộn mượt
    });
  };

  return (
    <Layout>
      {/* Header chứa logo và thanh search filter */}
      <Header style={{ 
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        padding: '0 50px',
        display: 'flex',
        alignItems: 'center',
        gap: '280px',
        height: 64,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000
      }}>
        {/* Logo với chức năng reset toàn bộ */}
        <img 
          src="https://cehsoft.com/wp-content/uploads/2024/11/logo-ceh-new-02.png" 
          alt="CEH Logo" 
          onClick={handleLogoClick}
          style={{ 
            height: 40,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer' // Thêm hiệu ứng con trỏ
          }} 
        />
        {/* Search filter */}
        <div style={{ 
          flex: 1,
          maxWidth: 600,
          height: 40
        }}>
          <SearchFilter 
            onSearch={(value) => setSearchQuery(value)}
            onChange={(value) => setInputValue(value)}
            value={inputValue}
          />
        </div>
      </Header>
      <Layout>
         <Sider width={200} style={{ 
           background: '#fff', 
           paddingTop: 64,
           height: 'calc(100vh - 64px)', // Adjust height to fit within the viewport minus the header
           overflow: 'auto' // Allow scrolling if content overflows
         }}>
          <StaticSidebar />
        </Sider> 
        <Content style={{ 
          padding: '114px 50px 50px', /* Thêm padding-top bằng chiều cao header + padding gốc */
          marginTop: 64, /* Đảm bảo nội dung không bị header che */
          flex: 1 // Ensure content takes up remaining space
        }}>
          <ProductList 
            searchQuery={searchQuery} 
            resetTrigger={resetTrigger} 
            filters={filters}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;