import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Col, Row } from "antd";
import { removeFromCart } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (index: number) => {
    dispatch(removeFromCart(index));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row gutter={[16, 16]}>
          {cartItems.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "8px",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>Dispatch: {item.expected_dispatch_date}</p>
                <Button
                  type="primary"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      )}
      <Button
        type="primary"
        onClick={handleCheckout}
        style={{ marginTop: "20px" }}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartPage;
