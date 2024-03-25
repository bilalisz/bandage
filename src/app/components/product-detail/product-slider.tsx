"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

type PropsType = {
  images: string[] | null;
};

const ProductSlider: React.FC<PropsType> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    images?.at(0) || ""
  );

  const handleImageCurrentImage = (image: string) => setSelectedImage(image);

  return (
    <Box
      component="figure"
      className="tw-h-full tw-w-full tw-flex tw-flex-col tw-gap-10"
    >
      <Box
        component="div"
        className="image-container tw-flex tw-justify-center tw-max-h-96 tw-max-w-full tw-overflow-hidden"
      >
        <Image
          src={selectedImage}
          layout="responsive"
          alt="imag-1"
          width={400}
          height={400}
          className="product-image"
        />
      </Box>
      <Box
        component="div"
        className="tw-flex tw-justify-center tw-items-center tw-gap-5"
      >
        {images?.slice(0, 5).map((image) => (
          <Box
            component="figure"
            key={image}
            // className=" tw-border"
            className={`product-image-large ${
              selectedImage === image ? "tw-border-4" : "tw-border"
            }`}
            onClick={() => handleImageCurrentImage(image)}
          >
            <Image
              src={image}
              layout="responsive"
              alt=""
              width={40}
              height={40}
              className="product-image tw-max-w-full tw-max-h-full"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductSlider;
