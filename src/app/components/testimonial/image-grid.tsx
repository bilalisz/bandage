import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";

const ImageGrid = () => {
  return (
    <Box
      component="div"
      className="tw-grid tw-grid-cols-3 tw-grid-rows-3 tw-gap-4"
    >
      {itemData.map((item) => (
        <Box
          component="div"
          className="tw-overflow-hidden tw-h-28 h-28 tw-col-span-1 tw-row-span-1"
          key={item.title}
        >
          <img
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
            className="tw-w-[100%] tw-h-[120%] "
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageGrid;

const itemData = [
  {
    img: "/images/test-img-1.png",
    title: "Breakfast",
  },
  {
    img: "/images/test-img-2.png",
    title: "Burger",
  },
  {
    img: "/images/test-img-3.png",
    title: "Camera",
  },
  {
    img: "/images/test-img-4.png",
    title: "Coffee",
  },
  {
    img: "/images/test-img-5.png",
    title: "Hats",
  },
  {
    img: "/images/test-img-6.png",
    title: "Honey",
  },
  {
    img: "/images/test-img-7.png",
    title: "Basketball",
  },
  {
    img: "/images/test-img-8.png",
    title: "Fern",
  },
  {
    img: "/images/test-img-9.png",
    title: "Mushrooms",
  },
];
