import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, Header } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

function appbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <Header textAlign={"center"} variant="h4">
        My Bags
      </Header>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}

export default appbarMobile;
