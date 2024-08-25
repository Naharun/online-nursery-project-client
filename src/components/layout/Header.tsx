import { Layout } from "antd";
const { Header } = Layout;
import { GiVineFlower } from "react-icons/gi";

const Headers = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "5vh",
          minWidth: 0,
          backgroundColor: "rgb(171, 121, 171)",
          alignItems: "center",
          position: "fixed",
          zIndex: 10,
          top: 0,
          width: "98.8%",
        }}
      >
        <p style={{ fontSize: "40px", color: "white" }}>
          <GiVineFlower />
        </p>
        <h3
          style={{
            marginRight: "600px",
            fontFamily: "arial",
            color: "white",
            fontSize: "18px",
          }}
        >
          Online Nursery
        </h3>

        <div>
          <input
            style={{
              padding: "10px 180px 10px 10px",
              borderRadius: "50px",
              minHeight: "10px",
              minWidth: "10px",
              textAlign: "start",
              border: "none",
            }}
            type="text"
            placeholder="search"
          />
          <input
            style={{
              padding: "7px 20px",
              margin: "20px 5px",
              borderRadius: "55px",
              border: "none",
            }}
            type="button"
            value="Enter"
          />
        </div>
      </Header>
    </Layout>
  );
};

export default Headers;
