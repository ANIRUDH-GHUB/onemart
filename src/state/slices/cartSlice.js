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
      const item = {
        name: action?.payload?.name || "",
        price: action?.payload?.price || 0,
        qt: action?.payload?.qt || 1,
        image: action?.payload?.image || "",
        id: Math.floor(Math.random() * 10000000),
      };
      state.cart = [...state.cart, item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart?.filter((item) => item.id != action.payload);
    },
  },
});

export const { fetchCart, getCartDetais, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
