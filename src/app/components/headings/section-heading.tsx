import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import { Box } from "@mui/material";

type PropsType = {
  tag: string;
  title: string;
  description: string;
};

const SectionHeading: React.FC<PropsType> = ({ tag, title, description }) => {
  return (
    <Box
      component="div"
      className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-gap-1"
    >
      <TypographyBody2 className="tw-text-app-gray-700 tw-font-semibold">
        {tag}
      </TypographyBody2>
      <TypographyHeadingH3 className=" !tw-text-lg tw-uppercase">
        {title}
      </TypographyHeadingH3>
      <TypographyBody2 className="tw-text-app-gray-700 tw-text-xs tw-text-center">
        {description}
      </TypographyBody2>
    </Box>
  );
};

export default SectionHeading;
