import { Box, Button } from "@mui/material";
import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";

const HomeBanner = () => {
  return (
    <Box
      component="div"
      className={`tw-bg-[url('/images/background.png')] tw-border tw-w-full tw-h-96 tw-bg-cover tw-bg-center tw-flex tw-justify-center tw-items-center`}
    >
      <Box
        component="div"
        className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-3 tw-w-[460px]"
      >
        <TypographyBody2 className="tw-text-xs tw-text-app-blue tw-font-semibold">
          Designing Better Experience
        </TypographyBody2>
        <TypographyHeadingH3 className="tw-text-2xl sm:tw-text-4xl tw-text-center">
          Problems trying to resolve the conflict between
        </TypographyHeadingH3>
        <TypographyBody2 className="tw-text-xs tw-text-app-gray-700 tw-text-center ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </TypographyBody2>
        <TypographyBody2 className="tw-text-app-green tw-text-2xl tw-font-semibold">
          $16.48
        </TypographyBody2>

        <Button
          variant="contained"
          className="tw-bg-app-blue tw-text-white tw-px-10"
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Box>
    </Box>
  );
};

export default HomeBanner;
