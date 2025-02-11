import React, { useState } from 'react';
import { Layout } from 'antd';
import ProductList from './components/ProductList';
import StaticSidebar from './components/StaticSidebar';
import Header from './components/Header';
import './styles.css';

const { Content, Sider } = Layout;

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [resetTrigger, setResetTrigger] = useState(false);
  const [filters, setFilters] = useState<{ category: string[] }>({
    category: []
  });

  const handleLogoClick = () => {
    setInputValue('');
    setSearchQuery('');
    setResetTrigger(prev => !prev);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFilterChange = (newFilters: { category: string[] }) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <Header 
        onLogoClick={handleLogoClick}
        searchQuery={searchQuery}
        inputValue={inputValue}
        setSearchQuery={setSearchQuery}
        setInputValue={setInputValue}
      />
      <Layout>
         <Sider width={250} style={{ 
           background: '#fff', 
           paddingTop: 64,
           height: 'calc(100vh - 64px)',
           overflow: 'auto'
         }}>
          <StaticSidebar onFilterChange={handleFilterChange} />
        </Sider> 
        <Content style={{ 
          padding: '114px 50px 50px',
          marginTop: 64,
          flex: 1
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