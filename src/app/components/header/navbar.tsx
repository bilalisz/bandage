import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import TypographyBody2 from "../custome-typography/typography-body2";
import { RiArrowDropDownLine } from "react-icons/ri";

const navLinks = [
  { id: 1, name: "Home", url: "#" },
  { id: 2, name: "Shop", url: "#", dropdown: true },
  { id: 3, name: "About", url: "#" },
  { id: 4, name: "Blog", url: "#" },
  { id: 5, name: "Contact", url: "#" },
  { id: 6, name: "Pages", url: "#" },
];

const Navbar = () => {
  return (
    <Box component="nav" className="tw-hidden md:tw-block">
      <ul className="tw-flex tw-items-center tw-gap-3">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <TypographyBody2 className="tw-text-sm tw-font-[500]">
              {link.name}
              {link.dropdown && <RiArrowDropDownLine size={24} />}
            </TypographyBody2>
          </Link>
        ))}
      </ul>
    </Box>
  );
};

export default Navbar;
