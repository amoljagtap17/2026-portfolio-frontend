import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Head from "components/lib/Head";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Head />

      {/* Keyboard users can jump past the header nav. Visible only on focus. */}
      <Link
        href="#main-content"
        sx={theme => ({
          position: "absolute",
          top: 8,
          left: 16,
          zIndex: theme.zIndex.tooltip,
          px: 4,
          py: 2,
          borderRadius: theme.vars.shape.borderRadiusMd,
          border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
          backgroundColor: theme.vars.palette.background.paper,
          transform: "translateY(-200%)",
          "&:focus": { transform: "none" },
        })}
      >
        Skip to content
      </Link>

      <Header />

      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{ flex: 1, py: { xs: 8, md: 12 }, outline: "none" }}
      >
        {/* Gutters and max-width (lg) come from the theme's MuiContainer. */}
        <Container>
          <Outlet />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
