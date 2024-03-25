import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import { Product } from "@/types/products";
import { calculateDiscountedPrice } from "@/utils";
import Link from "next/link";

type PropsType = {
  product: Product;
};

const ProductCard: React.FC<PropsType> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="tw-max-w-full tw-bg-white tw-flex tw-flex-col tw-items-center tw-pb-2 tw-rounded-sm"
    >
      <div className="tw-w-full tw-h-40 tw-overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={`${product.category}-${product.title}`}
          width={150}
          height={150}
          className="product-image"
        />
      </div>
      <Box
        component="div"
        className="tw-flex tw-flex-col tw-gap-1 tw-items-center tw-justify-center tw-mt-3"
      >
        <TypographyBody2 className="tw-font-semibold !tw-text-lg tw-flex tw-justify-center tw-items-center tw-w-48 tw-overflow-hidden tw-whitespace-nowrap tw-text-ellipsis tw-text-center">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </TypographyBody2>
        <TypographyBody2 className="tw-font-semibold tw-text-app-gray-700 tw-text-center">
          {product.category}
        </TypographyBody2>
        <Box
          component="span"
          className="tw-flex tw-items-center tw-gap-2 tw-text-center"
        >
          <TypographyBody2 className="!tw-text-app-gray-900 tw-font-semibold">
            ${product.price}
          </TypographyBody2>
          <TypographyBody2 className="!tw-text-app-green tw-font-semibold">
            $
            {calculateDiscountedPrice(
              product.price,
              product.discountPercentage
            )}
          </TypographyBody2>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
