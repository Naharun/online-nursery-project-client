import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FlowerDetail {
  image: string;
  name: string;
  price: string;
  add_to_cart: boolean;
  expected_dispatch_date: string;
}

export interface CartState {
  items: FlowerDetail[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<FlowerDetail>) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
