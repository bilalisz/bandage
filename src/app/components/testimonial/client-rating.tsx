import { Avatar, Box } from "@mui/material";
import React from "react";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import CustomeRating from "./custome- rating";
import TypographyBody2 from "../custome-typography/typography-body2";

const ClientRating = () => {
  return (
    <Box
      component="div"
      className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-10"
    >
      <TypographyHeadingH3 className="tw-text-lg tw-font-semibold">
        What they say about us
      </TypographyHeadingH3>
      <Box
        component="div"
        className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4"
      >
        <Avatar
          alt="Remy Sharp"
          src="/images/avatar-1.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <CustomeRating />
        <TypographyBody2 className="tw-text-xs tw-font-semibold tw-text-center tw-w-72 tw-text-app-gray-900">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </TypographyBody2>
        <Box
          component="div"
          className="tw-flex tw-flex-col tw-items-center tw-justify-center"
        >
          <TypographyBody2 className="tw-text-xs tw-font-semibold tw-text-app-blue !tw-text-center">
            Regina Miles
          </TypographyBody2>
          <TypographyBody2 className="tw-text-xs tw-font-semibold !tw-text-center">
            Designer
          </TypographyBody2>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientRating;
