import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { siteConfig } from "app/config/site";
import Logo from "components/lib/Logo";
import { fontStackSerif } from "components/providers/MuiProvider/brandedTokens";
import { Link as RouterLink } from "react-router";

interface IHeaderBrandProps {
  /** Called after the brand link is activated (e.g. to close the drawer). */
  onNavigate?: () => void;
}

export default function HeaderBrand({ onNavigate }: IHeaderBrandProps) {
  return (
    <Link
      component={RouterLink}
      to="/"
      onClick={onNavigate}
      underline="none"
      color="inherit"
      aria-label={`${siteConfig.name}, home`}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        minHeight: 44,
        color: "text.primary",
        "&:hover": { color: "text.primary" },
      }}
    >
      <Logo size={40} initials={siteConfig.initials} />
      <Typography
        component="span"
        sx={{
          fontFamily: fontStackSerif,
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: "-0.01em",
        }}
      >
        {siteConfig.name}
      </Typography>
    </Link>
  );
}
