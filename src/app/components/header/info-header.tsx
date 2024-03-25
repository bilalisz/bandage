"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import CustomeIcon from "../custome-icon";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import TypographyBody2 from "../custome-typography/typography-body2";

const InfoHeader = () => {
  return (
    <div className="info-header-cnt layout-info-header">
      <Box component="div">
        <TypographyBody2>
          <MdOutlineLocalPhone size={15} /> (255) 555-0188
        </TypographyBody2>
        <TypographyBody2>
          <MdOutlineMailOutline />
          michelle.rivera@example.com
        </TypographyBody2>
      </Box>
      <Box component="div">
        <TypographyBody2>
          Follow Us and get a chance to win 80% off
        </TypographyBody2>
      </Box>

      <Box component="div">
        <TypographyBody2>Follow Us:</TypographyBody2>

        <CustomeIcon iconComp={<FaInstagram size={20} />} />
        <CustomeIcon iconComp={<FaYoutube size={20} />} />
        <CustomeIcon iconComp={<BsFacebook size={20} />} />
        <CustomeIcon iconComp={<FaTwitter size={20} />} />
      </Box>
    </div>
  );
};

export default InfoHeader;
