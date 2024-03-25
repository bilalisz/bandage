import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import TypographyBody2 from "../custome-typography/typography-body2";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import { GiAlarmClock } from "react-icons/gi";
import { FaRegChartBar } from "react-icons/fa";

type PropsType = {
  image: string;
};

const Blog: React.FC<PropsType> = ({ image }) => {
  return (
    <Card className="tw-w-72 tw-rounded-none tw-relative tw-flex-1">
      <CardMedia
        component="img"
        image={"/images/" + image + ".png"}
        alt="Paella dish"
      />
      <Box
        component="p"
        className="tw-px-3 tw-bg-red-600 tw-text-white tw-absolute tw-top-2 tw-left-4 !tw-text-sm tw-rounded-sm"
      >
        NEW
      </Box>
      <CardContent className="tw-flex tw-flex-col tw-gap-3">
        <Box
          component="div"
          className="tw-flex tw-gap-5 tw-items-center !tw-text-app-gray-900"
        >
          <TypographyBody2 className="tw-text-app-blue tw-text-xs">
            Google
          </TypographyBody2>
          <TypographyBody2 className="tw-text-xs">Tranding</TypographyBody2>
          <TypographyBody2 className="tw-text-xs">New</TypographyBody2>
        </Box>
        <TypographyHeadingH3 className="tw-text-lg">
          Loudest à la Madison #1 (L integral)
        </TypographyHeadingH3>
        <TypographyBody2 className="tw-text-xs tw-w-44 tw-text-app-gray-700">
          We focus on ergonomics and meeting you where you work. Its only a
          keystroke away.
        </TypographyBody2>
        <Box
          component="div"
          className="tw-flex tw-justify-between tw-items-center"
        >
          <TypographyBody2 className="tw-text-xs tw-text-app-gray-900">
            <GiAlarmClock size={15} className="tw-text-app-blue" />
            22 April 2021
          </TypographyBody2>
          <TypographyBody2 className="tw-text-xs tw-text-app-gray-900">
            <FaRegChartBar size={15} className="tw-text-app-green" /> 10
            comments
          </TypographyBody2>
        </Box>
      </CardContent>
      <CardActions>
        <TypographyBody2 className="tw-text-xs tw-font-semibold">
          Learn More <KeyboardArrowRightIcon className="tw-text-app-blue" />
        </TypographyBody2>
      </CardActions>
    </Card>
  );
};

export default Blog;
