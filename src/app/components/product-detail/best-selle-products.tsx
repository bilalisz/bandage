import React from "react";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import { Box } from "@mui/material";
import ProductsSection from "../products-section";

const BestSelleProducts = () => {
  return (
    <Box component="div">
      <TypographyHeadingH3 className="tw-text-2xl tw-py-3 tw-border-b tw-uppercase">
        Best Seller products
      </TypographyHeadingH3>
      <Box component="div" className="tw-pb-6">
        <ProductsSection />
      </Box>
    </Box>
  );
};

export default BestSelleProducts;
