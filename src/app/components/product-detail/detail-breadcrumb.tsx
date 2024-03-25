import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Breadcrumb = () => {
  return (
    <Box component="nav" aria-label="breadcrumb" className="tw-w-max">
      <ol className="tw-flex tw-flex-wrap tw-items-center tw-w-full tw-py-2 tw-rounded-md  tw-bg-opacity-60">
        <li className="tw-flex tw-items-center tw-font-sans tw-text-sm tw-antialiased  tw-transition-colors tw-duration-300 tw-cursor-pointer tw-font-semibold hover:tw-text-blue-400">
          <Link href="/" className="tw-opacity-60">
            Home
          </Link>
        </li>
        <li className="">
          <KeyboardArrowRightIcon fontSize="small" />
        </li>
        <li className="tw-flex tw-items-center tw-font-sans tw-text-sm tw-antialiased tw-font-normal tw-leading-normal tw-transition-colors tw-duration-300 tw-cursor-pointer tw-text-blue-900 hover:tw-text-blue-500">
          <Link href="#" className="opacity-60">
            shop
          </Link>
        </li>
      </ol>
    </Box>
  );
};

export default Breadcrumb;
