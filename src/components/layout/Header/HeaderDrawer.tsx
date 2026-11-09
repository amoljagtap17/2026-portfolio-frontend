import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import BrandLink from "../BrandLink";
import HeaderNavList from "./HeaderNavList";

interface IHeaderDrawerProps {
  open: boolean;
  onClose: () => void;
  /** Called once the closing transition has finished. */
  onExited?: () => void;
}

// Navigation drawer for screens below md. Closes via the close button, the
// backdrop, Esc, or by choosing a link.
export default function HeaderDrawer({
  open,
  onClose,
  onExited,
}: IHeaderDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      // Header blurs the menu button before opening (so it isn't focused inside
      // the aria-hidden app root) and refocuses it via `onExited`, so MUI's
      // automatic restore (which would target <body>) is turned off.
      disableRestoreFocus
      slotProps={{
        transition: { onExited },
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
        <BrandLink variant="header" onNavigate={onClose} />
        <IconButton aria-label="Close menu" onClick={onClose} edge="end">
          <CloseOutlinedIcon />
        </IconButton>
      </Box>

      <Box component="nav" aria-label="Mobile" sx={{ p: 3 }}>
        <HeaderNavList orientation="vertical" onNavigate={onClose} />
      </Box>
    </Drawer>
  );
}
