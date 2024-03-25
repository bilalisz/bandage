import { Product } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

export interface CartProducts {
  wishlist: Product[];
}
const initialState: CartProducts = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const isProductInwishlist = state.wishlist.find(
        (item) => item.id === productToAdd.id
      );
      if (!isProductInwishlist) {
        state.wishlist.push(productToAdd);
        enqueueSnackbar(`${productToAdd.title} is added to wishlist`, {
          autoHideDuration: 3000,
          variant: "info",
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
        });
      }
    },
    removeToWishlist: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const productInwishlist = state.wishlist.filter(
        (item) => item.id !== productToAdd.id
      );
      state.wishlist = productInwishlist;
    },
  },
});

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
