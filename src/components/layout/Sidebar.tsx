import React, { useState } from "react";
import { Layout, Menu, Slider, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./Sidebar.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState<[number, number]>([10, 1000]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    navigate(`/price-range?min=${value[0]}&max=${value[1]}`);
  };

  return (
    <Sider
      width={collapsed ? 100 : 200}
      style={{
        backgroundColor: "lightgrey",
        transition: "width 0.3s ease",
        top: "0vh",
        left: 0,
      }}
      collapsedWidth={0}
    >
      <Button
        type="primary"
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "5px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        style={{
          height: "100%",
          textAlign: "center",
          width: "100%",
          marginTop: "40px",
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
