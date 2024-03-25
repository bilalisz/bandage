import { Box } from "@mui/material";
import React from "react";

type PropsType = {
  color: "blue" | "green" | "orang" | "black" | "gray";
};

const ColorBox: React.FC<PropsType> = ({ color }) => {
  let addColor;

  if (color === "blue") {
    addColor = "blue";
  } else if (color === "green") {
    addColor = "green";
  } else if (color === "orang") {
    addColor = "orang-1";
  } else if (color === "black") {
    addColor = "black";
  } else if (color === "gray") {
    addColor = "gray-700";
  } else {
    addColor = "";
  }
  return (
    <Box
      component="div"
      className="tw-flex tw-justify-start tw-items-center tw-gap-3"
    >
      <Box
        component="span"
        className={`tw-bg-app-blue tw-w-6 tw-h-6 tw-rounded-full`}
      ></Box>
      <Box
        component="span"
        className={`tw-bg-app-green tw-w-6 tw-h-6 tw-rounded-full`}
      ></Box>
      <Box
        component="span"
        className={`tw-bg-app-orang-1 tw-w-6 tw-h-6 tw-rounded-full`}
      ></Box>
      <Box
        component="span"
        className={`tw-bg-app-gray-700 tw-w-6 tw-h-6 tw-rounded-full`}
      ></Box>
    </Box>
  );
};

export default ColorBox;
