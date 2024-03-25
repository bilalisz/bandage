"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "../headings/section-heading";
import { Box, Button } from "@mui/material";
import ProductCard from "./product-card";
import { Product } from "@/types/products";
import { getProducts } from "@/commons/api-request";

type PropsType = {
  moreButton?: boolean;
};
type ProductType = {
  products: Product[] | null;
  total: number;
  limit: number;
  skip: number | undefined;
};

const ProductsSection: React.FC<PropsType> = ({ moreButton }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<ProductType>({
    products: [],
    total: 0,
    limit: 10,
    skip: 0,
  } as ProductType);

  useEffect(() => {
    callProductsApi({ limit: productsData.limit, skip: productsData.skip });
  }, []);

  const handlePagination = () => {
    let skipItems =
      productsData.skip === 0 ? 10 : productsData.products?.length;

    callProductsApi({
      limit: productsData.limit,
      skip: skipItems,
    });
  };

  const callProductsApi = (req: any) => {
    setIsLoading(true);
    getProducts(req)
      .then((res) => {
        if (res?.products.length) {
          setProductsData((prevData) => ({
            ...prevData,
            products: prevData.products
              ? [...prevData.products, ...res.products]
              : res.products,
            skip:
              prevData.skip === 0
                ? res.products.length
                : prevData.products?.length,
            total: res.total,
          }));
          setIsLoading(false);
        }
      })
      .catch((err) => {
        alert(err.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Box
        component="div"
        className="tw-flex tw-justify-center tw-gap-10  tw-flex-wrap tw-my-12"
      >
        {productsData?.products?.length
          ? productsData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </Box>
      {moreButton && (
        <Box component="div" className="tw-flex tw-justify-center">
          <Button
            variant="outlined"
            className="tw-px-10"
            disabled={
              isLoading || productsData.products?.length === productsData.total
                ? true
                : false
            }
            onClick={handlePagination}
          >
            {!isLoading ? "Load More Products" : "Loading more products..."}
          </Button>
        </Box>
      )}
    </>
  );
};

export default ProductsSection;
