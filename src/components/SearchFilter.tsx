import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

interface SearchFilterProps {
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
  value: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onChange, value }) => {
  return (
    <Search
      placeholder="Search here..."
      allowClear
      enterButton={<SearchOutlined style={{ fontSize: 18 }} />}
      size="large"
      onSearch={onSearch}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      style={{ 
        width: '100%',
        height: '100%',
        lineHeight: '1.5'
      }}
    />
  );
};

export default SearchFilter;