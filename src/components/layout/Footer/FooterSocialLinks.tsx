import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { siteConfig } from "app/config/site";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: <GitHubIcon /> },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: <LinkedInIcon />,
  },
];

// Pill-shaped outbound links to the owner's social profiles.
export default function FooterSocialLinks() {
  return (
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
  );
}
