import Box from "@mui/material/Box";
import { fontStackMono } from "components/providers/MuiProvider/brandedTokens";

// Monospace pill showing the app version injected at build time (vite.config).
export default function FooterVersion() {
  return (
    <Box
      component="span"
      sx={{
        flex: "none",
        display: "inline-flex",
        alignItems: "center",
        px: 3.5,
        py: 1.75,
        borderRadius: theme => theme.vars.shape.borderRadiusPill,
        border: "1.5px solid rgba(243, 236, 230, 0.25)",
        backgroundColor: "rgba(243, 236, 230, 0.05)",
        fontFamily: fontStackMono,
        fontSize: 13,
        fontWeight: 500,
        color: "footer.subtleText",
        whiteSpace: "nowrap",
      }}
    >
      App Version - {__APP_VERSION__}
    </Box>
  );
}
