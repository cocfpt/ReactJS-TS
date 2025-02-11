import React from 'react';
import { Layout } from 'antd';
import SearchFilter from './SearchFilter';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onLogoClick: () => void;
  searchQuery: string;
  inputValue: string;
  setSearchQuery: (value: string) => void;
  setInputValue: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, searchQuery, inputValue, setSearchQuery, setInputValue }) => {
  return (
    <AntHeader style={{ 
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
      <img 
        src="https://cehsoft.com/wp-content/uploads/2024/11/logo-ceh-new-02.png" 
        alt="CEH Logo" 
        onClick={onLogoClick}
        style={{ 
          height: 40,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }} 
      />
      <div style={{ 
        flex: 1,
        maxWidth: 600,
        height: 40
      }}>
        <SearchFilter 
          onSearch={setSearchQuery}
          onChange={setInputValue}
          value={inputValue}
        />
      </div>
    </AntHeader>
  );
};

export default Header; 