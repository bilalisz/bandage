"use client";
import { Rating } from "@mui/material";
import React, { useState } from "react";

const CustomeRating = () => {
  const [value, setValue] = useState<number | null>(4);
  return (
    <div>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
};

export default CustomeRating;
