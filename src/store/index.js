import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./cart/cart.slice";
import { categoriesApi } from "./categories/api";
import { productsApi } from "./products/api";
import categoriesReducer from "./categories/categories.slice";
import productsReducer from "./products/products.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(categoriesApi.middleware, productsApi.middleware),
});

setupListeners(store.dispatch);