import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { siteConfig } from "app/config/site";
import Logo from "components/lib/Logo";
import {
  fontStackMono,
  fontStackSerif,
} from "components/providers/MuiProvider/brandedTokens";
import { Link as RouterLink } from "react-router";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: <GitHubIcon /> },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: <LinkedInIcon />,
  },
];

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
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          aria-label={`${siteConfig.name}, home`}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            minWidth: 0,
            color: "footer.heading",
            "&:hover": { color: "footer.heading" },
          }}
        >
          <Logo
            size={56}
            initials={siteConfig.initials}
            frameColor="rgba(243, 236, 230, 0.35)"
          />
          <Typography
            variant="h1"
            component="span"
            sx={{
              fontFamily: fontStackSerif,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name}
          </Typography>
        </Link>

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

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {socialLinks.map(({ label, href, icon }) => (
            <Button
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="inherit"
              startIcon={icon}
              sx={{
                color: "footer.heading",
                borderRadius: theme => theme.vars.shape.borderRadiusPill,
                borderColor: "footer.borderStrong",
                boxShadow: "none",
                fontWeight: 600,
                "&:hover": {
                  boxShadow: "none",
                  borderColor: "footer.borderStrong",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
