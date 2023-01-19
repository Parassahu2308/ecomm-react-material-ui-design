import styled from "@emotion/styled";
import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";

//Appbar container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

//Header
export const Header = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

//My list
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

//IconsMobile
export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "centre",
  zIndex: "99",
  borderTop: `1px solid ${Colors.border}`,
}));

//IconsDesktop
export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
