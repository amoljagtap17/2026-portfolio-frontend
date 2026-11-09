import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import IconButton from "@mui/material/IconButton";

interface IHeaderMenuButtonProps {
  /** Whether the drawer this button controls is currently open. */
  open: boolean;
  onClick: () => void;
}

// Hamburger button that opens HeaderDrawer. Shown below md only.
export default function HeaderMenuButton({
  open,
  onClick,
}: IHeaderMenuButtonProps) {
  return (
    <IconButton
      aria-label="Open menu"
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={onClick}
      sx={{
        display: { xs: "inline-flex", md: "none" },
        width: 44,
        height: 44,
        color: "text.primary",
        backgroundColor: "background.paper",
        border: theme =>
          `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
        boxShadow: theme => theme.elevation.sm,
      }}
    >
      <MenuOutlinedIcon />
    </IconButton>
  );
}
