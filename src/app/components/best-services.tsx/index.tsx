import { Box, Icon } from "@mui/material";
import React from "react";
import SectionHeading from "../headings/section-heading";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import TypographyBody2 from "../custome-typography/typography-body2";

const contents = [
  {
    id: 1,
    title: "Easy Wins",
    description: "Get your best looking smile now!",
    icon: "win",
  },
  {
    id: 2,
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
    icon: "concrete",
  },
  {
    id: 3,
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
    icon: "growth",
  },
];

const TheBestServices = () => {
  return (
    <Box component="div" className="tw-flex tw-justify-center tw-flex-col">
      <SectionHeading
        tag="Featured Products"
        title="The Best Services"
        description="Problems trying to resolved the confilict between"
      />

      <Box
        component="div"
        className="tw-flex tw-flex-col tw-gap-10 md:tw-gap-0 md:tw-flex-row md:tw-justify-between md:tw-px-24 tw-mt-10"
      >
        {contents.map((content) => {
          return (
            <Box
              component="div"
              className="tw-flex tw-flex-col tw-gap-1 tw-items-center tw-justify-center"
              key={content.id}
            >
              <img src={`/icons/${content.icon}.svg`} width={60} height={60} />
              <TypographyHeadingH3 className="!tw-text-lg !tw-text-center">
                {content.title}
              </TypographyHeadingH3>
              <TypographyBody2 className="!tw-text-center !tw-text-xs tw-w-40">
                {content.description}
              </TypographyBody2>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TheBestServices;
