import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

function AppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //  if device size is less then md then return true
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}

export default AppBar;
