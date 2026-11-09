import {
  alpha,
  darken,
  lighten,
  type PaletteOptions,
  type ThemeOptions,
  type TypographyVariantsOptions,
} from "@mui/material/styles";

// Explicit weights: the bare "@fontsource/<font>" import only ships weight 400.
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";

/* -------------------------------------------------------------------------- */
/*  Fonts                                                                     */
/* -------------------------------------------------------------------------- */

export const fontFraunces = "Fraunces";
export const fontJakartaSans = "Plus Jakarta Sans";
export const fontJetBrainsMono = "JetBrains Mono";

/** Display + headings */
export const fontStackSerif = `"${fontFraunces}", Georgia, serif`;
/** Everything you read */
export const fontStackSans = `"${fontJakartaSans}", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
/** Code */
export const fontStackMono = `"${fontJetBrainsMono}", ui-monospace, SFMono-Regular, Menlo, monospace`;

/* -------------------------------------------------------------------------- */
/*  Colours                                                                   */
/*  Raw values from the styleguide (`.theme-light` / `.theme-dark`) and the   */
/*  landing page. Keys mirror the design's CSS variables.                     */
/* -------------------------------------------------------------------------- */

interface BrandColors {
  bg: string;
  surface: string;
  surfaceAlt: string;
  card: string;
  cardLine: string;
  /** Colour of the hard offset shadows */
  shadow: string;
  text: string;
  text2: string;
  /** Opacity of the hover overlay painted with the text colour */
  hoverOpacity: number;
  border: string;
  primary: string;
  primaryHover: string;
  primaryInk: string;
  primarySoft: string;
  onPrimary: string;
  secondary: string;
  secondarySoft: string;
  /** Not in the styleguide – derived: white on light teal, bg colour on dark teal */
  onSecondary: string;
  accent: string;
  accentSoft: string;
  /** Not in the styleguide – derived from the "Accent CTA" button (ink on marigold) */
  onAccent: string;
  success: string;
  successSoft: string;
  /** Not in the styleguide – derived like `onSecondary` */
  onSuccess: string;
  danger: string;
  dangerSoft: string;
  onDanger: string;
  ctaBg: string;
  onCta: string;
  onCta2: string;
  codeBg: string;
  codeText: string;
  footerBg: string;
}

const lightColors: BrandColors = {
  bg: "#FBF7F2",
  surface: "#FFF9F1",
  surfaceAlt: "#F3EADF",
  card: "#FFF3E6",
  cardLine: "#2B2220",
  shadow: "#2B2220",
  text: "#2B2220",
  text2: "#6B5E57",
  hoverOpacity: 0.13,
  border: "#E7DCCF",
  primary: "#B4532E",
  primaryHover: "#9A4524",
  primaryInk: "#8E3F20",
  primarySoft: "#F6E1D6",
  onPrimary: "#FFFFFF",
  secondary: "#2F5D62",
  secondarySoft: "#DDEAE8",
  onSecondary: "#FFFFFF",
  accent: "#E8A33D",
  accentSoft: "#FBEBD0",
  onAccent: "#2B2220",
  success: "#3F6B3A",
  successSoft: "#E3EDDC",
  onSuccess: "#FFFFFF",
  danger: "#A8352F",
  dangerSoft: "#F6DEDA",
  onDanger: "#FFFFFF",
  ctaBg: "#2F5D62",
  onCta: "#FFFFFF",
  onCta2: "#D5E4E2",
  codeBg: "#2B2220",
  codeText: "#F3ECE6",
  footerBg: "#231C18",
};

const darkColors: BrandColors = {
  bg: "#1C1715",
  surface: "#262019",
  surfaceAlt: "#312921",
  card: "#2A221C",
  cardLine: "#8A7465",
  shadow: "#5E4A3D",
  text: "#F3ECE6",
  text2: "#C2B5AA",
  hoverOpacity: 0.14,
  border: "#3B322A",
  primary: "#E08A63",
  primaryHover: "#EA9E7B",
  primaryInk: "#F0A584",
  primarySoft: "#3D2A21",
  onPrimary: "#1C1715",
  secondary: "#8FC1C4",
  secondarySoft: "#22383A",
  onSecondary: "#1C1715",
  accent: "#F0B65A",
  accentSoft: "#3A2E1C",
  onAccent: "#1C1715",
  success: "#9CCB94",
  successSoft: "#263524",
  onSuccess: "#1C1715",
  danger: "#EC9A92",
  dangerSoft: "#3E2422",
  onDanger: "#1C1715",
  ctaBg: "#22383A",
  onCta: "#F3ECE6",
  onCta2: "#BFD3D1",
  codeBg: "#120F0D",
  codeText: "#F3ECE6",
  footerBg: "#110D0B",
};

/** Landing-page colours that are identical in both colour schemes. */
const codeSyntax = {
  keyword: "#E8956F",
  property: "#9CCDD0",
  value: "#F0B65A",
};
const footerText = {
  text: "#E3D8CF",
  mutedText: "#B3A69B",
  hover: "#F0B65A",
};

/**
 * Maps a design colour role onto MUI's `main / light / dark / contrastText`.
 * - `light` is the design's "-soft" tint (pale surface of the role).
 * - `dark` is the hover shade: darker in light mode, lighter in dark mode.
 */
function role(
  scheme: "light" | "dark",
  main: string,
  soft: string,
  contrastText: string,
  hover?: string,
) {
  const shade = scheme === "light" ? darken : lighten;
  return { main, light: soft, dark: hover ?? shade(main, 0.2), contrastText };
}

function createPalette(
  scheme: "light" | "dark",
  c: BrandColors,
): PaletteOptions {
  const primary = {
    ...role(scheme, c.primary, c.primarySoft, c.onPrimary, c.primaryHover),
    ink: c.primaryInk,
  };
  const secondary = role(scheme, c.secondary, c.secondarySoft, c.onSecondary);
  const accent = role(scheme, c.accent, c.accentSoft, c.onAccent);

  return {
    primary,
    secondary,
    accent,
    success: role(scheme, c.success, c.successSoft, c.onSuccess),
    error: role(scheme, c.danger, c.dangerSoft, c.onDanger),
    // The design has no dedicated warning / info colours: reuse accent / secondary.
    warning: accent,
    info: secondary,
    text: {
      primary: c.text,
      secondary: c.text2,
      disabled: alpha(c.text, 0.45),
    },
    background: {
      default: c.bg,
      paper: c.card,
      surface: c.surface,
      surfaceAlt: c.surfaceAlt,
    },
    divider: c.border,
    // Hover overlay = text colour at 13% / 14% (styleguide `.btn-press:hover`).
    action: {
      active: c.text,
      hover: alpha(c.text, c.hoverOpacity),
      hoverOpacity: c.hoverOpacity,
    },
    outline: c.cardLine,
    shadow: c.shadow,
    cta: { main: c.ctaBg, contrastText: c.onCta, mutedText: c.onCta2 },
    code: { background: c.codeBg, text: c.codeText, ...codeSyntax },
    footer: { background: c.footerBg, ...footerText },
  };
}

/* -------------------------------------------------------------------------- */
/*  Typography                                                                */
/* -------------------------------------------------------------------------- */

// Font sizes use rem; the three largest use fluid clamp() exactly as designed,
// so do NOT run these through responsiveFontSizes().
const typography: TypographyVariantsOptions = {
  fontFamily: fontStackSans,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Fraunces – display and headings
  display: {
    fontFamily: fontStackSerif,
    fontWeight: 500,
    fontSize: "clamp(2.6rem, 5vw, 4rem)",
    lineHeight: 1.04,
    letterSpacing: "-0.025em",
  },
  h1: {
    fontFamily: fontStackSerif,
    fontWeight: 500,
    fontSize: "clamp(2.2rem, 4vw, 3rem)",
    lineHeight: 1.06,
    letterSpacing: "normal",
  },
  h2: {
    fontFamily: fontStackSerif,
    fontWeight: 500,
    fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
    lineHeight: 1.12,
    letterSpacing: "normal",
  },
  h3: {
    fontFamily: fontStackSerif,
    fontWeight: 500,
    fontSize: "1.5rem",
    lineHeight: 1.2,
    letterSpacing: "normal",
  },

  // Plus Jakarta Sans – everything you read
  h4: {
    // styleguide "Title"
    fontWeight: 700,
    fontSize: "1.125rem",
    lineHeight: 1.4,
    letterSpacing: "normal",
  },
  h5: {
    // not in the styleguide – keeps the scale monotonic below h4
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: 1.4,
    letterSpacing: "normal",
  },
  h6: {
    // not in the styleguide – keeps the scale monotonic below h5
    fontWeight: 700,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  subtitle1: {
    // styleguide "Body large"
    fontWeight: 400,
    fontSize: "1.125rem",
    lineHeight: 1.6,
    letterSpacing: "normal",
  },
  subtitle2: {
    // not in the styleguide
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  body1: {
    // styleguide "Body"
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.6,
    letterSpacing: "normal",
  },
  body2: {
    // styleguide "Small"
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  button: {
    fontWeight: 700,
    fontSize: "0.9375rem",
    lineHeight: 1.4,
    letterSpacing: "normal",
    textTransform: "none",
  },
  caption: {
    // helper text (13px in the styleguide)
    fontWeight: 400,
    fontSize: "0.8125rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  overline: {
    // styleguide "Overline"
    fontWeight: 700,
    fontSize: "0.8125rem",
    lineHeight: 1.5,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },

  // JetBrains Mono – code
  code: {
    fontFamily: fontStackMono,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.7,
    letterSpacing: "normal",
  },
};

/* -------------------------------------------------------------------------- */
/*  Elevation and borders                                                     */
/*  Flat offset shadows + a 2px ink border instead of blurred drop shadows.   */
/* -------------------------------------------------------------------------- */

// The shadow colour differs per colour scheme, so it is read from the
// `--mui-palette-shadow` CSS variable generated from `palette.shadow`.
const shadowColor = "var(--mui-palette-shadow)";

const elevation: NonNullable<ThemeOptions["elevation"]> = {
  none: "none",
  sm: `3px 3px 0 ${shadowColor}`,
  md: `5px 5px 0 ${shadowColor}`,
  lg: `8px 8px 0 ${shadowColor}`,
};

// MUI's `theme.shadows` has 25 slots (elevation 0–24). Collapse them onto the
// three design levels: 1–3 sm, 4–12 md, 13–24 lg.
const shadows = [
  elevation.none,
  ...Array<string>(3).fill(elevation.sm),
  ...Array<string>(9).fill(elevation.md),
  ...Array<string>(12).fill(elevation.lg),
] as unknown as NonNullable<ThemeOptions["shadows"]>;

/* -------------------------------------------------------------------------- */
/*  Tokens                                                                    */
/* -------------------------------------------------------------------------- */

export const brandedTokens: ThemeOptions = {
  cssVariables: {
    // Mirrors the design's `.theme-light` / `.theme-dark` wrappers.
    colorSchemeSelector: ".theme-%s",
  },
  colorSchemes: {
    light: { palette: createPalette("light", lightColors) },
    dark: { palette: createPalette("dark", darkColors) },
  },

  typography,

  // 4px unit: spacing(1) = 4, (2) = 8, (3) = 12, (4) = 16, (6) = 24, (8) = 32,
  // (12) = 48, (16) = 64 – the styleguide's "8px rhythm with a 4px half-step".
  spacing: 4,

  // Radius scale. `borderRadius` is the default (buttons, inputs).
  shape: {
    borderRadius: 12,
    borderRadiusSm: 8,
    borderRadiusMd: 12,
    borderRadiusLg: 16,
    borderRadiusXl: 20,
    borderRadiusXxl: 28,
    borderRadiusPill: 999,
  },

  shadows,
  elevation,
  borders: { width: 2, widthThin: 1.5 },

  // Keyboard focus ring: 3px marigold outline, 2px offset (styleguide
  // `:focus-visible`).
  focusVisible: {
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: 2,
    outlineColor: "var(--mui-palette-accent-main)",
  },
};
