import { createSlice } from "@reduxjs/toolkit";

import Produk1 from "../assets/produk/1.png";
import Produk2 from "../assets/produk/2.png";

const initialState = {
  value: [
    {
      produk: {
        name: "Denay syari motif",
        price: 1200000,
        image: Produk1,
      },
      quantity: 2,
    },
    {
      produk: {
        name: "Nike Air Max 270 React",
        price: 900000,
        image: Produk2,
      },
      quantity: 1,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.name === action.payload.produk.name
      );
      if (index > -1) {
        state.value[index].quantity += 1;
      } else {
        state.value.push({
          produk: action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    decfromCart: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.name === action.payload.produk.name
      );
      if (index > -1) {
        state.value[index].quantity -= 1;
      } else {
        state.value.push({
          produk: action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    getTotalQuantity: (state) => {
      return (
        state.value &&
        state.value.reduce((a, b) => {
          return a + b.quantity;
        }, 0)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, getTotalQuantity, decfromCart } = cartSlice.actions;

export default cartSlice.reducer;
