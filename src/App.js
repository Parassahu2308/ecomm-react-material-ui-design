import { Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import AppBar from "./components/appbar";
import Banner from "./components/banner";
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
        {/*
      Promotion
      Products
      Footer
      SearchBox
      AppDrawer
      */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
