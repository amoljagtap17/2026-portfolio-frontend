import Box from "@mui/material/Box";
import HeaderNavList from "./HeaderNavList";

// Desktop navigation (md and up). On smaller screens HeaderDrawer takes over.
export default function HeaderNav() {
  return (
    <Box
      component="nav"
      aria-label="Primary"
      sx={{ display: { xs: "none", md: "block" }, mr: 2 }}
    >
      <HeaderNavList orientation="horizontal" />
    </Box>
  );
}
