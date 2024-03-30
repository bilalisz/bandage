"use client";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import {
  CiHeart,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import MenuDrawer from "../menu-drawer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MyDialog from "../dialogs/my-dialog";
import { removeAllWishlist } from "@/redux/slices/wishlist";
import { addAllToCart } from "@/redux/slices/cart";

const HeaderActions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openCartModal, setOpenCartModal] = useState<boolean>(false);
  const [openWishlistModal, setOpenWishlistModal] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const states = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const cartLength = states?.cart.cart.length ? states?.cart.cart.length : "";
  const wishlistLenght = states?.wishtlist.wishlist.length
    ? states?.wishtlist.wishlist.length
    : "";

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddAllToCart = () => {
    dispatch(removeAllWishlist());
    dispatch(addAllToCart(states.wishtlist.wishlist));
    setOpenWishlistModal(false);
  };

  return (
    <>
      <Box className="tw-hidden sm:tw-flex tw-items-center tw-gap-1 tw-cursor-pointer tw-text-app-blue tw-text-[14px]">
        <CiUser />
        <p>Login</p>
        <p>/</p>
        <p>Register</p>
      </Box>
      <Box
        component="div"
        className="tw-hidden sm:tw-flex tw-items-center tw-gap-3 tw-cursor-pointer tw-text-app-blue"
      >
        <CiSearch onClick={() => alert("clik")} />
        <Box
          component="button"
          className="tw-flex tw-items-center"
          onClick={() => setOpenCartModal(true)}
        >
          <CiShoppingCart />
          <sub className="tw-text-xs">{cartLength && cartLength}</sub>
        </Box>
        <Box
          component="button"
          className="tw-flex tw-items-center"
          onClick={() => setOpenWishlistModal(true)}
        >
          <CiHeart />
          <sub className="tw-text-xs">{wishlistLenght && wishlistLenght}</sub>
        </Box>
      </Box>
      <Box
        component="div"
        className="tw-flex sm:tw-hidden tw-items-center tw-gap-3 tw-cursor-pointer tw-px-3"
      >
        <CiSearch />
        <CiShoppingCart />

        <Box component="button" onClick={handleMenuOpen}>
          <CiMenuBurger />
        </Box>
      </Box>
      {open && (
        <MenuDrawer anchorEl={anchorEl} open={open} onClose={handleMenuClose} />
      )}
      {openCartModal && (
        <MyDialog
          open={openCartModal}
          onClose={() => setOpenCartModal(false)}
          products={states.cart.cart}
          title="Cart"
          addMore={true}
          actions={
            <Button
              variant="contained"
              className="tw-bg-app-blue tw-text-white tw-capitalize"
            >
              Go to checkout
            </Button>
          }
        />
      )}
      {openWishlistModal && (
        <MyDialog
          open={openWishlistModal}
          onClose={() => setOpenWishlistModal(false)}
          products={states.wishtlist.wishlist}
          title="Wishlist"
          actions={
            <Button
              variant="contained"
              className="tw-bg-app-blue tw-text-white tw-capitalize"
              onClick={handleAddAllToCart}
            >
              Add to cart
            </Button>
          }
        />
      )}
    </>
  );
};

export default HeaderActions;
