import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FaceBookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: Colors.shaft,
        color: Colors.white,
        pt: 12,
        pb: 12,
        p: { xs: 4, md: 10 },
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <FaceBookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption" lineHeight={2}>
                Whislist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">my Newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email Address"
              variant="standard"
            />
            <Button
              sx={{ mt: 4, mb: 4 }}
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
