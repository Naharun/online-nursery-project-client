import { Layout, Menu } from "antd";
import "./Sidebar.css";

import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            width: "100%",
            position: "fixed",
            zIndex: 10,
            top: "64px",
            display: "flex",
            justifyContent: "center",
            minHeight: "5vh",
            minWidth: 0,
            backgroundColor: "transparent",
          }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/all-products">All Product</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact-us">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
