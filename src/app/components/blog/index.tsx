import { Box } from "@mui/material";
import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <Box component="div">
      <Box
        component="div"
        className="tw-flex tw-flex-col tw-gap-2 tw-justify-center tw-items-center"
      >
        <TypographyBody2 className="tw-text-app-blue tw-text-xs tw-font-semibold">
          Practice Advice
        </TypographyBody2>
        <TypographyHeadingH3>Featured Posts</TypographyHeadingH3>
      </Box>

      <Box
        component="div"
        className="tw-flex tw-flex-col tw-items-center sm:tw-flex-row sm:tw-justify-center tw-gap-2 tw-mt-10"
      >
        <Blog image="blog-img-1" />
        <Blog image="blog-img-2" />
        <Blog image="blog-img-3" />
      </Box>
    </Box>
  );
};

export default Blogs;
