import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import searchReducer from "./features/searchSlice";
import productsReducer from "./features/productsSlice";
import { baseApi } from "./api/api";
import priceRangeReducer from "./features/priceRangeReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    products: productsReducer,
    priceRange: priceRangeReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Save state to localStorage
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

// Load state from localStorage

// Export types for use in selectors and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
