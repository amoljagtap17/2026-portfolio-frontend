import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/material/styles";
import { siteConfig } from "app/config/site";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.65; }
`;

// "Now" blurb with an availability status chip.
export default function FooterNow() {
  return (
    <Box
      sx={{
        flex: "1 1 280px",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        maxWidth: 360,
      }}
    >
      <Typography variant="overline" sx={{ mb: 1.5, color: "footer.accent" }}>
        Now
      </Typography>
      <Typography sx={{ fontSize: 15, color: "footer.text" }}>
        {siteConfig.now}
      </Typography>
      <Box
        component="span"
        sx={{
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          gap: 2,
          px: 3,
          py: 1.25,
          borderRadius: theme => theme.vars.shape.borderRadiusPill,
          backgroundColor: "footer.statusBackground",
          color: "footer.statusText",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "footer.statusDot",
            animation: `${pulse} 3s ease-in-out infinite`,
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        />
        {siteConfig.status}
      </Box>
    </Box>
  );
}
