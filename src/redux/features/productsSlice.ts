// productsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  // Add other product fields as needed
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [], // Initial empty products array
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
export type { Product, ProductsState };
