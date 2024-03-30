import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import CartProduct from "../product-detail/cart-product";
import { Product } from "@/types/products";
import CustomeDialog from ".";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import { formatPrice } from "@/utils";

type PropsType = {
  open: boolean;
  onClose: () => void;
  products: Product[];
  title: string;
  addMore?: boolean;
  actions: React.ReactNode;
};

const MyDialog: React.FC<PropsType> = ({
  open,
  onClose,
  products,
  title,
  addMore,
  actions,
}) => {
  let totalAmount = products.reduce((total, item) => total + item.price, 0);
  return (
    <CustomeDialog
      title={title}
      open={open}
      onClose={onClose}
      actions={actions}
    >
      <Box component="div">
        <Box component="div" className="tw-flex tw-flex-col tw-gap-3 ">
          {products.length ? (
            products.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                addMore={addMore}
                title={title}
              />
            ))
          ) : (
            <Box
              component="div"
              className="tw-flex tw-justify-center tw-items-center"
            >
              <TypographyHeadingH3 className="tw-text-app-gray-700 ">
                No Products are in {title}
              </TypographyHeadingH3>
            </Box>
          )}
        </Box>
        <Divider />
        <Box
          component="div"
          className="tw-flex tw-justify-between tw-items-center tw-w-full tw-pt-4"
        >
          <Box component="div" className="tw-flex tw-gap-2">
            <Typography className="tw-font-semibold">
              Items {products.length}
            </Typography>
          </Box>
          <Box component="div" className="tw-flex tw-gap-2">
            <Typography className="tw-font-semibold">
              Total Amount: ${formatPrice(totalAmount)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CustomeDialog>
  );
};

export default MyDialog;
