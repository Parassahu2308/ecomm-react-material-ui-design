import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, Header, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

function appbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <Header>My Bags</Header>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}

export default appbarDesktop;
