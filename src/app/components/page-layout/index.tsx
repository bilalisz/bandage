import React from "react";

type PropsType = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <main className="layout-cnt sm:tw-px-24 tw-min-h-full">{children}</main>
  );
};

export default PageLayout;
