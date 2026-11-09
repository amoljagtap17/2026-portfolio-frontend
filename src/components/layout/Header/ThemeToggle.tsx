import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";

// Switches between the light and dark colour schemes. The theme applies a
// `.theme-light` / `.theme-dark` class to <html> (see brandedTokens).
export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();

  // `mode` is undefined until the stored preference has been read.
  if (!mode) return null;

  const resolved = mode === "system" ? systemMode : mode;
  const isDark = resolved === "dark";
  const nextLabel = isDark ? "light" : "dark";

  return (
    <Button
      variant="outlined"
      color="inherit"
      aria-label={`Switch to ${nextLabel} mode`}
      onClick={() => setMode(isDark ? "light" : "dark")}
      startIcon={isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      sx={{
        minHeight: 44,
        // Icon-only square on phones (overrides MUI's 64px min-width).
        minWidth: { xs: 44, sm: 64 },
        px: { xs: 3, sm: 3.5 },
        color: "text.primary",
        backgroundColor: "background.paper",
        // Hide the label on very small screens; the icon + aria-label remain.
        "& .MuiButton-startIcon": { mr: { xs: 0, sm: 2 }, ml: 0 },
      }}
    >
      <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
        {isDark ? "Dark" : "Light"}
      </Box>
    </Button>
  );
}
