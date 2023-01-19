import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Collection</Typography>

        <BannerTitle variant="h2">New Bags</BannerTitle>

        <BannerDescription variant="subtitle">
          lorem kuyvcp kejc wuaueyf UWtriulq iiwyuw, oiiwyefwh kwuyflbli
          iuewfihfvuykt uy6ivyt76crfu
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
