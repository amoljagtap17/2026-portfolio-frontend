// Type augmentation for the branded MUI theme (see brandedTokens.ts).
// The import below makes `theme.vars.*` (CSS theme variables) non-optional.
import type {} from "@mui/material/themeCssVarsAugmentation";
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  /* ---------------------------------- Palette --------------------------------- */

  interface PaletteColor {
    /** Darker, text-safe variant of `main` (styleguide `--primary-ink`). */
    ink?: string;
  }
  interface SimplePaletteColorOptions {
    ink?: string;
  }

  interface TypeBackground {
    /** Form-field and inset surfaces (styleguide `--surface`). */
    surface: string;
    /** Alternate section / hover surface (styleguide `--surface-alt`). */
    surfaceAlt: string;
  }

  /** Dark call-to-action band (landing page). */
  interface PaletteCta {
    main: string;
    contrastText: string;
    mutedText: string;
  }
  /** Code block + syntax colours (landing page hero snippet, tooltips). */
  interface PaletteCode {
    background: string;
    text: string;
    keyword: string;
    property: string;
    value: string;
  }
  /** Footer – always dark, in both colour schemes (landing page). */
  interface PaletteFooter {
    background: string;
    /** Brand name / headings */
    heading: string;
    /** Links and body copy */
    text: string;
    /** Taglines */
    subtleText: string;
    /** Copyright row */
    mutedText: string;
    /** Section labels */
    accent: string;
    /** Link hover */
    hover: string;
    /** Hairline dividers */
    border: string;
    /** Pill outlines */
    borderStrong: string;
    /** "Open to…" status chip */
    statusBackground: string;
    statusText: string;
    statusDot: string;
  }

  interface Palette {
    /** Marigold highlight colour (styleguide `--accent`). */
    accent: PaletteColor;
    cta: PaletteCta;
    code: PaletteCode;
    footer: PaletteFooter;
    /** Strong 2px border / ink colour (styleguide `--card-line`). */
    outline: string;
    /** Colour of the hard offset shadows (see `theme.elevation`). */
    shadow: string;
  }
  interface PaletteOptions {
    accent?: PaletteColorOptions;
    cta?: PaletteCta;
    code?: PaletteCode;
    footer?: PaletteFooter;
    outline?: string;
    shadow?: string;
  }

  /* -------------------------------- Typography -------------------------------- */

  interface TypographyVariants {
    display: CSSProperties;
    code: CSSProperties;
  }
  interface TypographyVariantsOptions {
    display?: CSSProperties;
    code?: CSSProperties;
  }

  /* ----------------------------- Shape (radius) ------------------------------- */

  interface Shape {
    /** 8px – chips, small elements */
    borderRadiusSm: number;
    /** 12px – buttons, inputs (same as `borderRadius`) */
    borderRadiusMd: number;
    /** 16px – small cards */
    borderRadiusLg: number;
    /** 20px – cards */
    borderRadiusXl: number;
    /** 28px – panels, dialogs */
    borderRadiusXxl: number;
    /** 999px – pills */
    borderRadiusPill: number;
  }
  interface ShapeOptions {
    borderRadiusSm?: number;
    borderRadiusMd?: number;
    borderRadiusLg?: number;
    borderRadiusXl?: number;
    borderRadiusXxl?: number;
    borderRadiusPill?: number;
  }

  /* --------------------------- Elevation and borders -------------------------- */

  interface Elevation {
    none: string;
    /** 3px 3px 0 – buttons, chips, inputs */
    sm: string;
    /** 5px 5px 0 – cards and panels */
    md: string;
    /** 8px 8px 0 – hero media, dialogs */
    lg: string;
  }
  interface Borders {
    /** 2px – default border (cards, buttons, inputs) */
    width: number;
    /** 1.5px – thin border (outcome chips) */
    widthThin: number;
  }

  interface Theme {
    elevation: Elevation;
    borders: Borders;
  }
  interface ThemeOptions {
    elevation?: Elevation;
    borders?: Borders;
  }
}

/* ------------------------- Component prop overrides ------------------------- */

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    code: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}
declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    accent: true;
  }
}
declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    accent: true;
  }
}
