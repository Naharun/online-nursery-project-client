

import React, { useState } from "react";
import { Layout, Menu, Slider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState<[number, number]>([10, 1000]);

  // Explicitly type the `handlePriceChange` function to expect a number array
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    navigate(`/price-range?min=${value[0]}&max=${value[1]}`);
  };

  return (
    <Sider
      style={{
        backgroundColor: "transparent",
        top: "60px",
      }}
    >
      <Menu
        mode="inline"
        style={{
          height: "100%",
          textAlign: "center",
          top: "130px",
          position: "fixed",
          zIndex: "10px",
          width: "200px",
        }}
        defaultOpenKeys={["sub1", "sub2", "sub3"]}
      >
        <SubMenu key="sub1" className="top-level-menu" title="All Categories">
          <SubMenu key="sub1-1" className="sub-menu" title="Plants">
            <Menu.Item key="1">
              <Link to="/flowering-plants">Flowering Plants</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/flowers-by-season">Flowers By Season</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/gift-plants">Gift Plants</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/seeds-bulbs">Seeds & Bulbs</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/pots-planters">Pots & Planters</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/garden-decor">Garden Decor</Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" className="top-level-menu" title="Availability">
          <Menu.Item key="7" className="sub-menu-item">
            <Link to="/in-stock">In Stock</Link>
          </Menu.Item>
          <Menu.Item key="8" className="sub-menu-item">
            <Link to="/out-of-stock">Out Of Stock</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" className="top-level-menu" title="Shop By Price">
          <Menu.Item key="9" className="sub-menu-item">
            <div style={{ padding: "10px" }}>
              <Slider
                range
                defaultValue={[10, 1000]}
                min={10}
                max={1000}
                onChange={handlePriceChange}
                value={priceRange}
              />
            </div>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
