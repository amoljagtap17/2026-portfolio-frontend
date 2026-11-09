import Link from "@mui/material/Link";
import type { TypographyProps } from "@mui/material/Typography";
import { siteConfig } from "app/config/site";
import Logo from "components/lib/Logo";
import SiteName from "components/lib/SiteName";
import { Link as RouterLink } from "react-router";

type BrandLinkVariant = "header" | "footer";

interface IPreset {
  logoSize: number;
  gap: number;
  /** Text colour of the link (and its hover colour). */
  color: string;
  minHeight?: number;
  /** Logo frame stroke; defaults to the theme outline colour. */
  logoFrameColor?: string;
  nameVariant?: TypographyProps["variant"];
  nameSx: TypographyProps["sx"];
}

const presets: Record<BrandLinkVariant, IPreset> = {
  header: {
    logoSize: 40,
    gap: 3,
    color: "text.primary",
    minHeight: 44,
    // Slightly smaller on phones so the name never wraps next to the buttons.
    nameSx: {
      fontSize: { xs: 18, sm: 20 },
      fontWeight: 600,
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap",
    },
  },
  footer: {
    logoSize: 56,
    gap: 4,
    color: "footer.heading",
    logoFrameColor: "rgba(243, 236, 230, 0.35)",
    nameVariant: "h1",
    nameSx: {
      fontSize: "clamp(2rem, 4vw, 3.2rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
    },
  },
};

interface IBrandLinkProps {
  variant: BrandLinkVariant;
  /** Called after the link is activated (e.g. to close the drawer). */
  onNavigate?: () => void;
}

// Logo + site name, linking to the home page. The header uses the compact
// preset, the footer the large one.
export default function BrandLink({ variant, onNavigate }: IBrandLinkProps) {
  const preset = presets[variant];

  return (
    <Link
      component={RouterLink}
      to="/"
      onClick={onNavigate}
      underline="none"
      aria-label={`${siteConfig.name}, home`}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: preset.gap,
        minWidth: 0,
        minHeight: preset.minHeight,
        color: preset.color,
        "&:hover": { color: preset.color },
      }}
    >
      <Logo
        size={preset.logoSize}
        initials={siteConfig.initials}
        frameColor={preset.logoFrameColor}
      />
      <SiteName variant={preset.nameVariant} sx={preset.nameSx} />
    </Link>
  );
}
