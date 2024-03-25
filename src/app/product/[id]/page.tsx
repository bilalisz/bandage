import React from "react";
import { NextPage } from "next";
import PageLayout from "@/app/components/page-layout";
import { getProductDetail } from "@/commons/api-request";
import ProductDetail from "@/app/components/product-detail";
import { Box } from "@mui/material";
import ProductBlog from "@/app/components/product-detail/product-blog";
import BestSelleProducts from "@/app/components/product-detail/best-selle-products";
import BrandCompanys from "@/app/components/product-detail/brand-companys";

type PropsType = {
  params: {
    id: string;
  };
};

const ProductDetailPage: NextPage<PropsType> = async ({ params }) => {
  const productDetail = await getProductDetail(params.id);

  return (
    <>
      <Box component="div" className="tw-bg-app-light-1 tw-min-h-full">
        <PageLayout>
          <ProductDetail product={productDetail} />
        </PageLayout>
      </Box>
      <PageLayout>
        <Box component="section" className="tw-hidden sm:tw-block ">
          <ProductBlog />
        </Box>
      </PageLayout>
      <Box
        component="section"
        className="tw-hidden sm:tw-block  tw-bg-app-light-1 "
      >
        <PageLayout>
          <BestSelleProducts />
        </PageLayout>
      </Box>
      <Box component="div" className="tw-bg-app-light-1  tw-pb-3">
        <PageLayout>
          <BrandCompanys />
        </PageLayout>
      </Box>
    </>
  );
};

export default ProductDetailPage;
