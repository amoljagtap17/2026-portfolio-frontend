import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "components/lib/Head";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import SkipLink from "./SkipLink";

const mainContentId = "main-content";

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Head />
      <SkipLink targetId={mainContentId} />
      <Header />

      <Box
        component="main"
        id={mainContentId}
        tabIndex={-1}
        sx={{ flex: 1, py: { xs: 8, md: 12 }, outline: "none" }}
      >
        {/* Fluid gutters come from the theme's MuiContainer. */}
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
