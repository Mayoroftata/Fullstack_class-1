import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/cartSlice";


const store = configureStore({
    reducer: {cart: cartReducer},
});

export default store;