import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Input, Form } from "antd";
import { clearCart } from "../../redux/features/cartSlice";

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = () => {
    if (name && phone && address && cartItems.length > 0) {
      // Implement order creation and Stripe payment integration here

      alert("Order placed successfully!");
      dispatch(clearCart());
    } else {
      alert("Please fill in all details and ensure your cart is not empty.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      <Form>
        <Form.Item label="Name">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item label="Phone">
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item label="Address">
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Item>
        <Button type="primary" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutPage;
