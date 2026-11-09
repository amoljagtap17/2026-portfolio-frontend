import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { siteConfig } from "app/config/site";
import AccentLabel from "components/lib/AccentLabel";
import FooterStatus from "./FooterStatus";

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
      <AccentLabel color="footer.accent" sx={{ mb: 1.5 }}>
        Now
      </AccentLabel>
      <Typography sx={{ fontSize: 15, color: "footer.text" }}>
        {siteConfig.now}
      </Typography>
      <FooterStatus>{siteConfig.status}</FooterStatus>
    </Box>
  );
}
