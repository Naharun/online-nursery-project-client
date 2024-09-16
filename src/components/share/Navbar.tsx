import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const getSelectedKey = () => {
    if (pathname === "/") return "1";
    if (pathname.includes("/all-products")) return "2";
    if (pathname.includes("/about")) return "3";
    if (pathname.includes("/contact-us")) return "4";
    if (pathname.includes("/login")) return "5";
    return "1";
  };

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          padding: "0px 5px ",
          top: "3vh",
          width: "40px",
          height: "50px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ fontSize: "30px", color: "rgb(171, 121, 171)" }}
          />
        </div>
      </Header>
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        visible={visible}
        style={{ width: "250px" }}
      >
        <Menu
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          style={{ width: "100%" }}
        >
          <Menu.Item key="1">
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/all-products" onClick={onClose}>
              All Products
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about" onClick={onClose}>
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact-us" onClick={onClose}>
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/login" onClick={onClose}>
              Login
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/list" onClick={onClose}>
              Product List
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/create-plant" onClick={onClose}>
              Create Plant
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Navbar;
