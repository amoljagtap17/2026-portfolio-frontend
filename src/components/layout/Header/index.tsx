import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRef, useState } from "react";
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

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // MUI marks the rest of the app (#root) aria-hidden while the drawer is
  // open. If the menu button still has focus at that moment, the browser
  // blocks it ("aria-hidden on an element because its descendant retained
  // focus"). So drop focus first, and put it back on the button once the
  // drawer has finished closing (while it is still closing, its focus trap
  // would pull focus straight back in).
  const openMenu = () => {
    menuButtonRef.current?.blur();
    setMenuOpen(true);
  };
  const closeMenu = () => setMenuOpen(false);
  const restoreMenuButtonFocus = () => menuButtonRef.current?.focus();

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
                ref={menuButtonRef}
                open={drawerOpen}
                onClick={openMenu}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <HeaderDrawer
        open={drawerOpen}
        onClose={closeMenu}
        onExited={restoreMenuButtonFocus}
      />
    </>
  );
}
