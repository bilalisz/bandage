import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import Navbar from "./navbar";
const HeaderActions = dynamic(() => import("./header-actions"), { ssr: false });

const HeaderNav = () => {
  return (
    <Box className="layout-cnt tw-flex tw-justify-between tw-items-center tw-py-4">
      <Box className="tw-flex tw-justify-between tw-items-center tw-flex-1">
        <Link href="/">
          <TypographyHeadingH3>Bandage</TypographyHeadingH3>
        </Link>
        <Navbar />
      </Box>

      <Box className="tw-flex-1 tw-flex tw-justify-end tw-gap-5 tw-items-center">
        <HeaderActions />
      </Box>
    </Box>
  );
};

export default HeaderNav;
