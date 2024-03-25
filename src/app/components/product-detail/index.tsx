import { Box, Link, Stack } from "@mui/material";
import React from "react";
import Breadcrumb from "./detail-breadcrumb";
import ProductInfo from "./product-info";
import { Product } from "@/types/products";

type PropsType = {
  product: Product | undefined;
};

const ProductDetail: React.FC<PropsType> = ({ product }) => {
  return (
    <Box component="section" className="tw-w-full tw-pb-10">
      <Box component="div" className="tw-py-5">
        <Breadcrumb />
      </Box>
      <Box component="section">
        <ProductInfo product={product} />
      </Box>
    </Box>
  );
};

export default ProductDetail;
