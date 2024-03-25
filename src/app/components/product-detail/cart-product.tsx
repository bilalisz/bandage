import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import TypographyBody2 from "../custome-typography/typography-body2";
import { Product } from "@/types/products";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import { formatPrice } from "@/utils";
import { Close } from "@mui/icons-material";
import { useAppDispatch } from "@/redux/hooks";
import { removeToCart } from "@/redux/slices/cart";
import { removeToWishlist } from "@/redux/slices/wishlist";

type PropsType = {
  product: Product;
  addMore?: boolean;
  title: string;
};

const CartProduct: React.FC<PropsType> = ({
  product,
  title,
  addMore = false,
}) => {
  const dispatch = useAppDispatch();

  const [totalAmount, setTotalAmount] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(1);

  const handleCountIncrement = () => {
    setTotalCount(totalCount + 1);
  };
  const handleCountDecrrement = () => {
    if (totalCount === 1) return;
    else setTotalCount(totalCount - 1);
  };

  const handleRemoveItemToCart = () => {
    if (title === "Cart") dispatch(removeToCart(product));
    if (title === "Wishlist") dispatch(removeToWishlist(product));
  };

  return (
    <Box className="tw-relative tw-py-5 tw-px-3">
      <Box
        component="div"
        className="tw-flex tw-justify-between tw-items-center "
      >
        <Box component="div" className="tw-flex-1">
          <Image width={80} height={80} src={product.thumbnail} alt="imag-1" />
        </Box>
        <Box component="div" className="tw-flex-1">
          <TypographyBody2 className="tw-text-sm tw-font-app-montserrat tw-font-semibold">
            {product.brand}
          </TypographyBody2>
          <TypographyHeadingH3 className="tw-text-lg tw-font-app-montserrat tw-font-semibold">
            {product.title.split(" ").splice(0, 2).join(" ")}
          </TypographyHeadingH3>
        </Box>
        <Box
          component="div"
          className="tw-flex-1 tw-flex tw-justify-end tw-items-center tw-gap-2"
        >
          {addMore && (
            <Box
              component={"div"}
              className="tw-flex tw-justify-center tw-items-center tw-h-5 tw-py-3 tw-rounded-xl tw-border"
            >
              <IconButton
                onClick={handleCountDecrrement}
                component="button"
                className="tw-px-3"
                disabled={Boolean(totalCount === 1)}
              >
                -
              </IconButton>
              <Box
                component="div"
                className="tw-border-l tw-border-r tw-px-3 text-xs"
              >
                {totalCount}
              </Box>
              <IconButton
                component="button"
                className="tw-px-3"
                onClick={handleCountIncrement}
              >
                +
              </IconButton>
            </Box>
          )}
          <TypographyBody2 className="tw-text-lg tw-font-app-montserrat tw-font-semibold">
            ${formatPrice(product.price)}
          </TypographyBody2>
        </Box>
      </Box>

      <IconButton
        className="tw-absolute tw-top-0 tw-right-0 tw-text-app-gray-900"
        onClick={handleRemoveItemToCart}
      >
        <Close fontSize="small" className="tw-text-xs" />
      </IconButton>
    </Box>
  );
};

export default CartProduct;
