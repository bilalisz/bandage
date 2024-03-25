"use client";
import { Product } from "@/types/products";
import { Box, Button, Divider, IconButton, Rating } from "@mui/material";
import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import { formatPrice } from "@/utils";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ColorBox from "../custome-color-box";
import ProductSlider from "./product-slider";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cart";
import { addToWishlist, removeToWishlist } from "@/redux/slices/wishlist";
import { enqueueSnackbar } from "notistack";

type PropsType = {
  product: Product | undefined;
};

const ProductInfo: React.FC<PropsType> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cart, wishtlist } = useAppSelector((state) => state);

  const handleAddToWishlist = () => {
    let isCarted = cart.cart.find((item) => item.id === product?.id);
    if (!isCarted) dispatch(addToWishlist(product as Product));
    else
      enqueueSnackbar(`${product?.title} is already added in cart`, {
        autoHideDuration: 3000,
        variant: "warning",
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
      });
  };

  return (
    <Box
      component="div"
      className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-gap-10 "
    >
      <Box component="div" className="tw-flex-1">
        <ProductSlider images={product?.images as string[] | null} />
      </Box>
      <Box
        component="div"
        className=" tw-flex-1 tw-flex tw-flex-col tw-gap-5 tw-h-full"
      >
        <Box component="div" className="tw-flex tw-flex-col tw-gap-2 tw-pb-5">
          <TypographyBody2 className="tw-text-xl tw-font-thin">
            {product?.title}
          </TypographyBody2>
          <Rating name="read-only" value={product?.rating} readOnly />
          <TypographyHeadingH3 className="tw-font-app-montserrat">
            ${formatPrice(product?.price)}
          </TypographyHeadingH3>
          <Box
            component="span"
            className="tw-font-semibold tw-flex tw-items-center tw-gap-2"
          >
            <TypographyBody2 className=" tw-text-xs">
              Availability:
            </TypographyBody2>
            <TypographyBody2 className="tw-font-semibold tw-text-app-blue tw-text-xs">
              {product?.stock.toLocaleString().length
                ? "In Stock"
                : "Not Available"}
            </TypographyBody2>
          </Box>
          <TypographyBody2 className=" tw-text-xs tw-text-app-gray-900">
            {product?.description}
          </TypographyBody2>
          <Divider className="tw-flex-1 tw-my-3" />

          <Box
            component="div"
            className="tw-flex tw-justify-start tw-items-center tw-gap-3"
          >
            <ColorBox color="blue" />
          </Box>
        </Box>
        <Box
          component="div"
          className="tw-flex tw-items-center tw-justify-start tw-gap-3 tw-flex-wrap-reverse"
        >
          <Button
            size="small"
            variant="contained"
            className="tw-bg-app-blue tw-text-white tw-capitalize"
          >
            select option
          </Button>
          <IconButton
            className="tw-bg-white tw-p-1"
            onClick={handleAddToWishlist}
            disabled={wishtlist.wishlist.some(
              (cartItem) => cartItem.id === product?.id
            )}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton
            className="tw-bg-white tw-p-1"
            onClick={() => {
              dispatch(addToCart(product as Product));
              dispatch(removeToWishlist(product as Product));
            }}
            disabled={cart.cart.some((cartItem) => cartItem.id === product?.id)}
          >
            <ShoppingCartIcon fontSize="small" />
          </IconButton>
          <IconButton className="tw-bg-white tw-p-1">
            <VisibilityIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
