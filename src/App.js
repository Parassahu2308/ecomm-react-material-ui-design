import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { useEffect } from "react";
import AppBar from "./components/appbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Product from "./components/product";
import Promotion from "./components/promotions";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "Material-Ui-Design";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <AppBar />
        <Banner />
        <Promotion />
        <Box>
          <Typography
            variant="h4"
            display={"flex"}
            justifyContent={"center"}
            sx={{ p: 4 }}
          >
            Our Products
          </Typography>
        </Box>
        <Product />
        <Footer />
        {/*
      SearchBox
      AppDrawer
      */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
