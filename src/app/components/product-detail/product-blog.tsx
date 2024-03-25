import { Box, Typography } from "@mui/material";
import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import Image from "next/image";

const ProductBlog = () => {
  return (
    <Box component="div">
      <Box
        component="nav"
        className="tw-flex tw-justify-center tw-items-center tw-py-5 tw-gap-10 tw-border-b tw-font-semibold tw-text-app-gray-700"
      >
        <TypographyBody2 className="tw-text-xs tw-font-semibold">
          Description
        </TypographyBody2>
        <TypographyBody2 className="tw-text-xs tw-font-semibold">
          Additional Information
        </TypographyBody2>
        <Box component="span" className="tw-flex tw-items-center tw-gap-1">
          <TypographyBody2 className="tw-text-xs tw-font-semibold">
            Reviews
          </TypographyBody2>
          <TypographyBody2 className="tw-text-app-green tw-font-semibold">
            (0)
          </TypographyBody2>
        </Box>
      </Box>
      <Box
        component="div"
        className="tw-py-10 tw-grid tw-grid-cols-4 tw-grid-rows-1 tw-gap-4 lg:tw-gap-10"
      >
        <Box
          component="article"
          className=" tw-col-span-4 tw-row-span-4 lg:tw-col-span-2 lg:tw-row-span-2 tw-py-0 lg:tw-py-10 tw-flex tw-flex-col tw-gap-5"
        >
          <Typography variant="h2" sx={{ fontSize: 28, fontWeight: 600 }}>
            The quick for jumps over
          </Typography>
          <TypographyBody2 className="tw-text-xs tw-text-app-gray-700">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met. RELIT
            official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
          </TypographyBody2>
          <TypographyBody2 className="tw-text-xs tw-text-app-gray-700 tw-px-8 tw-border-l-2 tw-border-l-app-green">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. RELIT official consequent door ENIM
          </TypographyBody2>
          <TypographyBody2 className="tw-text-xs tw-text-app-gray-700">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met. RELIT
            official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
          </TypographyBody2>
        </Box>
        <Box
          component="figure"
          className="tw-place-content-center tw-col-span-4 tw-row-span-4 lg:tw-col-span-2 lg:tw-row-span-2 tw-p-0 lg:tw-p-10 "
        >
          <Image
            src="/images/prod-detail-blog-1.png"
            alt="blog-image-1"
            width={400}
            height={400}
            layout="responsive"
            className="product-image tw-w-full tw-h-full"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBlog;
