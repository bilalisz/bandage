import { Box, Button, TextField } from "@mui/material";
import React from "react";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import FooterLinks from "./footer-links";
import { featuredLinks, generalLinks, resourceLinks } from "@/utils";
import TypographyBody2 from "../custome-typography/typography-body2";

const Footer = () => {
  return (
    <footer className="">
      <Box component="div" className="layout-cnt !tw-mx-0 sm:tw-px-28 tw-px-4">
        <Box
          component="div"
          className="tw-flex tw-flex-col tw-gap-4 sm:tw-gap-0 sm:tw-flex-row sm:tw-justify-between sm:tw-items-center  tw-py-6 tw-border-b"
        >
          <TypographyHeadingH3>Bandage</TypographyHeadingH3>
          <Box component="div" className="tw-flex tw-gap-2 tw-items-center">
            <BsFacebook size={15} className="tw-text-app-blue" />
            <FaInstagram size={15} className="tw-text-app-blue" />
            <FaTwitter size={15} className="tw-text-app-blue" />
          </Box>
        </Box>
        <Box
          component="div"
          className="tw-grid tw-grid-cols-12 tw-gap-5 tw-py-5"
        >
          <Box
            component="div"
            className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-2"
          >
            <FooterLinks heading="Company Info" linkCollection={generalLinks} />
          </Box>
          <Box
            component="div"
            className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-2"
          >
            <FooterLinks heading="Legal" linkCollection={generalLinks} />
          </Box>
          <Box
            component="div"
            className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-2"
          >
            <FooterLinks heading="Features" linkCollection={featuredLinks} />
          </Box>
          <Box
            component="div"
            className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-2"
          >
            <FooterLinks heading="Resources" linkCollection={resourceLinks} />
          </Box>
          <Box
            component="div"
            className="tw-col-span-12 sm:tw-col-span-12 md:tw-col-span-4"
          >
            <TypographyHeadingH3 className="tw-text-xl tw-font-semibold">
              Get in Touch
            </TypographyHeadingH3>
            <Box component="div" className="tw-flex tw-mt-5">
              <TextField
                id="you-email"
                placeholder="You Email"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                  },
                }}
              />

              <Button
                variant="contained"
                className="tw-bg-app-blue "
                sx={{
                  borderRadius: 0,
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="div"
        className="tw-py-6 tw-bg-app-light-1 max-sm:tw-flex max-sm:tw-justify-center max-sm:tw-items-center  sm:tw-px-28 tw-px-4"
      >
        <TypographyBody2 className="tw-text-xs  ">
          Made With Love By Finland All Right Reserved
        </TypographyBody2>
      </Box>
    </footer>
  );
};

export default Footer;
