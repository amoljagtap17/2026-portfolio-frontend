import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { siteConfig } from "app/config/site";
import BrandLink from "../BrandLink";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterVersion from "./FooterVersion";

// Large brand row (logo, name, app version) plus tagline and social pills.
export default function FooterBrand() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5.5 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px 24px",
        }}
      >
        <BrandLink variant="footer" />
        <FooterVersion />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "18px 28px",
        }}
      >
        <Typography
          sx={{ maxWidth: 440, fontSize: 16, color: "footer.subtleText" }}
        >
          {siteConfig.tagline}
        </Typography>
        <FooterSocialLinks />
      </Box>
    </Box>
  );
}
