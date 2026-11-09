import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "components/lib/Head";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Head />
      <Header />
      <Box
        component="main"
        sx={{ flex: 1, px: { xs: 2.5, md: 3 }, py: { xs: 2.5, md: 3 } }}
      >
        <Container maxWidth="lg" disableGutters>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
