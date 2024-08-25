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
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
