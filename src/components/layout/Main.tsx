import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Headers from "./Header";

const { Content } = Layout;

const Main = () => {
  return (
    <Layout
      style={{
        minHeight: "80vh",
        minWidth: "80vh",
      }}
    >
      <Headers />
      <Navbar />
      <Layout>
        <Sidebar />
        <Content
          style={{ padding: "90px 24px", minHeight: 280, paddingTop: "20px" }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
