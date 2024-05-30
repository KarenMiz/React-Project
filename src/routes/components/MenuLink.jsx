 import React from "react";
 import NavBarLink from "./NavBarLink";
 import MenuItem from "@mui/material/MenuItem";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {

  return (
    <NavBarLink to={navigateTo}>
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {text}
      </MenuItem>
    </NavBarLink>
  );
};

export default MenuLink;










