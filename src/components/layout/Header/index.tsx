import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import BrandLink from "../BrandLink";
import HeaderDrawer from "./HeaderDrawer";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderNav from "./HeaderNav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  // The drawer is mobile-only: if the viewport grows past md while it is open,
  // it simply stops being open (no effect/state sync needed).
  const drawerOpen = menuOpen && !isDesktop;

  return (
    <>
      <AppBar position="sticky" component="header">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 72 },
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <BrandLink variant="header" />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <HeaderNav />
              <ThemeToggle />
              <HeaderMenuButton
                open={drawerOpen}
                onClick={() => setMenuOpen(true)}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <HeaderDrawer open={drawerOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
