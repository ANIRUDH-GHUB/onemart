import { createSlice } from "@reduxjs/toolkit";
import cartJSON from "./../../model/student/cart.json";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchCart: (state) => {
      console.log("json", cartJSON);
      state.cart = cartJSON;
    },
    getCartDetais: (state) => state.cart,
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.cart = state.cart?.filter((item) => item.id != action.payload);
    },
  },
});

export const { fetchCart, getCartDetais, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
