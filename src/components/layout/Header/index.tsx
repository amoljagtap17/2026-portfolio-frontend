import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import HeaderBrand from "./HeaderBrand";
import HeaderDrawer from "./HeaderDrawer";
import HeaderNav from "./HeaderNav";
import ThemeToggle from "./ThemeToggle";

export { default as HeaderBrand } from "./HeaderBrand";
export { default as HeaderDrawer } from "./HeaderDrawer";
export { default as HeaderNav } from "./HeaderNav";
export { default as ThemeToggle } from "./ThemeToggle";

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
        <Container>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 72 },
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <HeaderBrand />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <HeaderNav />
              <ThemeToggle />
              <IconButton
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                aria-haspopup="dialog"
                onClick={() => setMenuOpen(true)}
                sx={{
                  display: { xs: "inline-flex", md: "none" },
                  width: 44,
                  height: 44,
                  color: "text.primary",
                  backgroundColor: "background.paper",
                  border: t =>
                    `${t.borders.width}px solid ${t.vars.palette.outline}`,
                  boxShadow: t => t.elevation.sm,
                }}
              >
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <HeaderDrawer open={drawerOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
