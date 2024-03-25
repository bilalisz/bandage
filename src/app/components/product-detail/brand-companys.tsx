import { Box } from "@mui/material";
import React from "react";
import {
  FaRedditAlien,
  FaHooli,
  FaReddit,
  FaAws,
  FaLyft,
  FaStripe,
  FaPiedPiperHat,
} from "react-icons/fa";

const BrandCompanys = () => {
  return (
    <Box
      component="div"
      className="tw-flex tw-flex-col tw-gap-5 sm:tw-flex-row tw-justify-evenly tw-items-center tw-flex-wrap"
    >
      <FaHooli size={70} className="tw-text-app-gray-700" />
      <FaLyft size={70} className="tw-text-app-gray-700" />
      <FaPiedPiperHat size={70} className="tw-text-app-gray-700" />
      <FaStripe size={70} className="tw-text-app-gray-700" />
      <FaAws size={70} className="tw-text-app-gray-700" />
      <FaRedditAlien size={70} className="tw-text-app-gray-700" />
    </Box>
  );
};

export default BrandCompanys;
