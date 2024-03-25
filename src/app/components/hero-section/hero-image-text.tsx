import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";

const HeroImageText = () => {
  return (
    <div className="tw-absolute tw-top-4 tw-left-4">
      <TypographyBody2 className="tw-text-[#2DC071] tw-font-semibold">
        5 Items
      </TypographyBody2>
      <TypographyHeadingH3>FRUNITURE</TypographyHeadingH3>
      <TypographyBody2 className="tw-font-semibold tw-text-xs">
        Read More
      </TypographyBody2>
    </div>
  );
};

export default HeroImageText;
