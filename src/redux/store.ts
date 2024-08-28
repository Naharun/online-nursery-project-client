// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./features/cartSlice";
// import { baseApi } from "./api/api";

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//     cart: cartReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { baseApi } from "./api/api";
import searchReducer from "./features/searchSlice"; // Import the search slice

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    search: searchReducer, // Add the search slice to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
