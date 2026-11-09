import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router";
import { navItems } from "../navItems";
import HeaderBrand from "./HeaderBrand";

interface IHeaderDrawerProps {
  open: boolean;
  onClose: () => void;
}

// Navigation drawer for screens below md. Closes via the close button, the
// backdrop, Esc, or by choosing a link.
export default function HeaderDrawer({ open, onClose }: IHeaderDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          role: "dialog",
          "aria-label": "Site navigation",
          sx: { width: "min(320px, 85vw)" },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          minHeight: 72,
          px: 4,
          borderBottom: theme =>
            `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
        }}
      >
        <HeaderBrand onNavigate={onClose} />
        <IconButton aria-label="Close menu" onClick={onClose} edge="end">
          <CloseOutlinedIcon />
        </IconButton>
      </Box>

      <List
        component="nav"
        aria-label="Mobile"
        sx={{ display: "flex", flexDirection: "column", gap: 1, p: 3 }}
      >
        {navItems.map(({ label, path }) => (
          <ListItemButton
            key={path}
            component={NavLink}
            to={path}
            end={path === "/"}
            onClick={onClose}
            sx={{
              minHeight: 48,
              borderRadius: theme => theme.vars.shape.borderRadiusMd,
              fontWeight: 500,
              "&[aria-current='page']": {
                fontWeight: 600,
                backgroundColor: "background.surfaceAlt",
              },
            }}
          >
            <ListItemText
              primary={label}
              slotProps={{ primary: { sx: { fontWeight: "inherit" } } }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
