import { Box, Menu, MenuItem } from "@mui/material";
import React from "react";

type PropsType = {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
};

const MenuDrawer: React.FC<PropsType> = ({ anchorEl, onClose, open }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      className="tw-block sm:tw-hidden"
      sx={{
        "& .MuiPaper-root": {
          top: "60px !important",
          left: "0 !important",
          maxWidth: "100vw !important",
          boxShadow: "none",
        },
      }}
    >
      <Box
        component="div"
        className="tw-w-screen tw-flex tw-flex-col tw-items-center tw-py-5"
      >
        <MenuItem onClick={onClose}>Home</MenuItem>
        <MenuItem onClick={onClose}>Product</MenuItem>
        <MenuItem onClick={onClose}>Price</MenuItem>
        <MenuItem onClick={onClose}>Contact</MenuItem>
      </Box>
    </Menu>
  );
};

export default MenuDrawer;
