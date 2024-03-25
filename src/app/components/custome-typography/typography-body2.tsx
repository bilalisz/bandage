import React from "react";
import { Typography } from "@mui/material";

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const TypographyBody2: React.FC<PropsType> = ({ children, className }) => {
  return (
    <Typography
      variant="body2"
      className={`${className} tw-flex tw-items-center tw-gap-1 tw-text-sm`}
    >
      {children}
    </Typography>
  );
};

export default TypographyBody2;
