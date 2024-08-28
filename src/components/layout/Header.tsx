import { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import { GiVineFlower } from "react-icons/gi";
import { setSearchTerm } from "../../redux/features/searchSlice";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const Headers = () => {
  const [searchTerm, setSearchTermState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTerm));
    navigate("/all-products");
  };

  // Function to filter products based on search term

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
            marginRight: "650px",
            fontFamily: "arial",
            color: "white",
            fontSize: "18px",
          }}
        >
          Plantify
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
            value={searchTerm}
            onChange={(e) => setSearchTermState(e.target.value)}
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
            onClick={handleSearch}
          />
        </div>
      </Header>
    </Layout>
  );
};

export default Headers;
