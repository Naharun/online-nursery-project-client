import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar: React.FC = () => {
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

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgb(236, 234, 234)",
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[getSelectedKey()]}
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
            <Link to="/all-products">All Products</Link>
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
