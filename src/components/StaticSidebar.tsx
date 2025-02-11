import React from 'react';
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

interface StaticSidebarProps {
  onFilterChange: (filters: { category: string[] }) => void;
}

const StaticSidebar: React.FC<StaticSidebarProps> = ({ onFilterChange }) => {
  const handleCheckboxChange = (checkedValues: any) => {
    onFilterChange({ category: checkedValues });
  };

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="Categories" key="0">
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Women" key="1">
            <Checkbox.Group onChange={handleCheckboxChange}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Checkbox value="Beauty">Beauty</Checkbox></li>
                <li><Checkbox value="Skin-care">Skin-care</Checkbox></li>
                <li><Checkbox value="Womens-bags">Womens-bags</Checkbox></li>
                <li><Checkbox value="Womens-dresses">Womens-dresses</Checkbox></li>
                <li><Checkbox value="Womens-jewellery">Womens-jewellery</Checkbox></li>
                <li><Checkbox value="Womens-shoes">Womens-shoes</Checkbox></li>
                <li><Checkbox value="Womens-watches">Womens-watches</Checkbox></li>
                <li><Checkbox value="Tops">Tops</Checkbox></li>
              </ul>
            </Checkbox.Group>
          </Panel>
          <Panel header="Men" key="2">
            <Checkbox.Group onChange={handleCheckboxChange}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Checkbox value="Mens-shirts">Mens-shirts</Checkbox></li>
                <li><Checkbox value="Mens-shoes">Mens-shoes</Checkbox></li>
                <li><Checkbox value="Mens-watches">Mens-watches</Checkbox></li>
                <li><Checkbox value="Sunglasses">Sunglasses</Checkbox></li>
                <li><Checkbox value="Sports-accessories">Sports-accessories</Checkbox></li>
              </ul>
            </Checkbox.Group>
          </Panel>
          <Panel header="Home" key="3">
            <Checkbox.Group onChange={handleCheckboxChange}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Checkbox value="Furniture">Furniture</Checkbox></li>
                <li><Checkbox value="Home-decoration">Home-decoration</Checkbox></li>
                <li><Checkbox value="Kitchen-accessories">Kitchen-accessories</Checkbox></li>
                <li><Checkbox value="Groceries">Groceries</Checkbox></li>
              </ul>
            </Checkbox.Group>
          </Panel>
          <Panel header="Technology" key="4">
            <Checkbox.Group onChange={handleCheckboxChange}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Checkbox value="Electronics">Electronics</Checkbox></li>
                <li><Checkbox value="Laptops">Laptops</Checkbox></li>
                <li><Checkbox value="Mobile-accessories">Mobile-accessories</Checkbox></li>
                <li><Checkbox value="Smartphones">Smartphones</Checkbox></li>
                <li><Checkbox value="Tablets">Tablets</Checkbox></li>
              </ul>
            </Checkbox.Group>
          </Panel>
          <Panel header="Car" key="5">
            <Checkbox.Group onChange={handleCheckboxChange}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Checkbox value="Motorcycle">Motorcycle</Checkbox></li>
                <li><Checkbox value="Vehicle">Vehicle</Checkbox></li>
              </ul>
            </Checkbox.Group>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
};

export default StaticSidebar; 