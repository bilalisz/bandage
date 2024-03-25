import { Product } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

export interface CartProducts {
  cart: Product[];
}
const initialState: CartProducts = {
  cart: [
    // {
    //   id: 1,
    //   title: "iPhone 9",
    //   description: "An apple mobile which is nothing like apple",
    //   price: 549,
    //   discountPercentage: 12.96,
    //   rating: 4.69,
    //   stock: 94,
    //   brand: "Apple",
    //   category: "smartphones",
    //   thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    //   images: [
    //     "https://cdn.dummyjson.com/product-images/1/1.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/2.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/3.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/4.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    //   ],
    // },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const isProductInCart = state.cart.find(
        (item) => item.id === productToAdd.id
      );
      if (!isProductInCart) {
        state.cart.push(productToAdd);
        enqueueSnackbar(`${productToAdd.title} is added to cart`, {
          autoHideDuration: 3000,
          variant: "info",
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
        });
      }
    },
    removeToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const productInwishlist = state.cart.filter(
        (item) => item.id !== productToAdd.id
      );
      state.cart = productInwishlist;
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
