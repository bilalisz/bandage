import { Box } from "@mui/material";
import React from "react";
import ClientRating from "./client-rating";
import ImageGrid from "./image-grid";

const Testimonial = () => {
  return (
    <Box
      component="div"
      className="tw-grid tw-grid-cols-4 tw-gap-4 sm:tw-gap-10 tw-mt-32 "
    >
      <Box component="div" className=" tw-col-span-4 sm:tw-col-span-2 ">
        <ClientRating />
      </Box>
      <Box component="div" className="tw-col-span-4 sm:tw-col-span-2 ">
        <ImageGrid />
      </Box>
    </Box>
  );
};

export default Testimonial;
