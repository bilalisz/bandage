import React from "react";
import InfoHeader from "./info-header";
import HeaderNav from "./header-nav";

const Header = () => {
  return (
    <header>
      <div className="tw-hidden md:tw-block">
        <InfoHeader />
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
