import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const StaticSidebar: React.FC = () => {
  return (
    <Collapse defaultActiveKey={['1']} accordion>
      <Panel header="Women" key="1">
        <ul>
          <li>Beauty</li>
          <li>Skin-care</li>
          <li>Womens-bags</li>
          <li>Womens-dresses</li>
          <li>Womens-jewellery</li>
          <li>Womens-shoes</li>
          <li>Womens-watches</li>
          <li>Tops</li>
        </ul>
      </Panel>
      <Panel header="Men" key="2">
        <ul>
          <li>Mens-shirts</li>
          <li>Mens-shoes</li>
          <li>Mens-watches</li>
          <li>Sunglasses</li>
          <li>Sports-accessories</li>
        </ul>
      </Panel>
      <Panel header="Home" key="3">
        <ul>
          <li>Furniture</li>
          <li>Home-decoration</li>
          <li>Kitchen-accessories</li>
          <li>Groceries</li>
        </ul>
      </Panel>
      <Panel header="Technology" key="4">
        <ul>
          <li>Electronics</li>
          <li>Laptops</li>
          <li>Mobile-accessories</li>
          <li>Smartphones</li>
          <li>Tablets</li>
        </ul>
      </Panel>
      <Panel header="Car" key="5">
        <ul>
          <li>Motorcycle</li>
          <li>Vehicle</li>
        </ul>
      </Panel>
    </Collapse>
  );
};

export default StaticSidebar; 