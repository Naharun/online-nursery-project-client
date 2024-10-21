// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../redux/store";
// import { Button, Col, Row } from "antd";
// import { removeFromCart } from "../../redux/features/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { useGetCartItemsQuery } from "../../redux/api/api";

// const CartPage: React.FC = () => {
//   const { data, error, isLoading } = useGetCartItemsQuery();
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRemoveFromCart = (index: number) => {
//     dispatch(removeFromCart(index));
//   };

//   const handleCheckout = () => {
//     navigate("/checkout");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <Row gutter={[16, 16]}>
//           {cartItems.map((item, index) => (
//             <Col key={index} xs={24} sm={12} md={8}>
//               <div
//                 style={{
//                   border: "1px solid #d9d9d9",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <h3>{item.name}</h3>
//                 <p>{item.price}</p>
//                 <p>Dispatch: {item.expected_dispatch_date}</p>
//                 <Button
//                   type="primary"
//                   onClick={() => handleRemoveFromCart(index)}
//                 >
//                   Remove
//                 </Button>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       )}
//       <Button
//         type="primary"
//         onClick={handleCheckout}
//         style={{ marginTop: "20px" }}
//       >
//         Proceed to Checkout
//       </Button>
//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import { Button, Col, Row, Spin, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import {
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
} from "../../redux/api/api";
import { TCartItem } from "../../types/cartItem";

const CartPage: React.FC = () => {
  const userId = "User123"; // Static user ID, replace with actual user ID if needed
  const { data, error, isLoading } = useGetCartItemsQuery(userId); // Fetch cart data for the user
  const [removeFromCart, { isLoading: isRemoving }] =
    useRemoveFromCartMutation(); // Hook for removing items
  const navigate = useNavigate();

  // Access items from the cart object
  const cartItems = data?.cart?.items;

  const handleRemoveFromCart = async (itemId: string) => {
    try {
      await removeFromCart({ userId, itemId });
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (isLoading) {
    return <Spin tip="Loading cart items..." />;
  }

  if (error) {
    return <Alert message="Failed to load cart items" type="error" />;
  }

  if (!Array.isArray(cartItems)) {
    return <p>No cart items found or cart data is invalid.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row gutter={[16, 16]}>
          {cartItems.map((item: TCartItem, index: number) => (
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
                  danger
                  onClick={() => handleRemoveFromCart(item._id)} // Pass item._id for removal
                  loading={isRemoving} // Show loading state while removing
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
