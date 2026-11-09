import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router";
import { navItems } from "../navItems";

// Desktop navigation (md and up). On smaller screens HeaderDrawer takes over.
export default function HeaderNav() {
  return (
    <Box
      component="nav"
      aria-label="Primary"
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        gap: 0.5,
        mr: 2,
      }}
    >
      {navItems.map(({ label, path }) => (
        <Button
          key={path}
          component={NavLink}
          to={path}
          // "/" would otherwise match every route.
          end={path === "/"}
          color="inherit"
          sx={{
            minHeight: 44,
            px: 3.5,
            fontWeight: 500,
            color: "text.secondary",
            // NavLink sets aria-current="page" on the active link.
            "&[aria-current='page']": {
              fontWeight: 600,
              color: "text.primary",
              backgroundColor: "background.surfaceAlt",
            },
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
