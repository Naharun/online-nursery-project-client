import React, { useState } from "react";
import { Layout, Badge, Button } from "antd";
import { GiVineFlower } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/features/searchSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import Navbar from "../share/Navbar";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Headers: React.FC = () => {
  const [searchTerm, setSearchTermState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTerm));
    navigate("/all-products");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(171, 121, 171)",
        width: "100%",
        top: 0,
        zIndex: 10,
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Navbar />

        <div style={{ display: "flex", alignItems: "center" }}>
          <GiVineFlower style={{ fontSize: "40px", color: "white" }} />

          <h3 style={{ marginLeft: "3px", color: "white" }}>Plantify</h3>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <input
          style={{
            padding: "8px 16px",
            borderRadius: "50px",
            border: "none",
            width: "100%",
            maxWidth: "400px",
          }}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTermState(e.target.value)}
        />
        <button
          style={{
            width: "30%",
            maxWidth: "100px",
            borderStartEndRadius: "100px",
            borderEndEndRadius: "100px",
            padding: "4px 0px",
            border: "none",
            color: "rgb(171, 121, 171)",
            cursor: "pointer",
            fontSize: "18px",
            marginLeft: "-20px",
          }}
          onClick={handleSearch}
        >
          <FiSearch />
        </button>
      </div>

      <Badge count={cartItems.length} showZero>
        <Button
          icon={<ShoppingCartOutlined />}
          onClick={handleCartClick}
          style={{
            borderRadius: "20px",
            color: "white",
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
        >
          Cart
        </Button>
      </Badge>
    </Header>
  );
};

export default Headers;
