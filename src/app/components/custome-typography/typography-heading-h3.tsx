import React from "react";

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const TypographyHeadingH3: React.FC<PropsType> = ({ children, className }) => {
  return (
    <h3 className={`${className} tw-text-2xl tw-font-bold`}>{children}</h3>
  );
};

export default TypographyHeadingH3;
