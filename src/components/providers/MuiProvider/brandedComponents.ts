import { type ThemeOptions } from "@mui/material/styles";

/**
 * Basic, token-driven defaults and overrides only (border, radius, shadow,
 * sizes). Richer styling belongs in separate themed components built with
 * `styled`. Always read colours from `theme.vars` so they follow the active
 * colour scheme (light / dark) without re-rendering.
 */
export const brandedComponents: ThemeOptions["components"] = {
  /* ------------------------------- Foundations ------------------------------ */

  MuiCssBaseline: {
    styleOverrides: {
      html: { scrollBehavior: "smooth" },
      "@media (prefers-reduced-motion: reduce)": {
        html: { scrollBehavior: "auto" },
      },
    },
  },

  MuiTypography: {
    defaultProps: {
      // Map the custom variants onto semantic elements.
      variantMapping: { display: "h1", code: "code" },
    },
  },

  MuiContainer: {
    defaultProps: { maxWidth: "lg" },
    styleOverrides: {
      // Fluid gutters: clamp(16px, 4vw, 48px)
      root: { paddingInline: "clamp(16px, 4vw, 48px)" },
    },
  },

  MuiLink: {
    defaultProps: { underline: "hover" },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.vars.palette.primary.ink,
        "&:hover": { color: theme.vars.palette.primary.main },
      }),
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.vars.palette.divider,
        borderBottomWidth: theme.borders.width,
      }),
    },
  },

  /* --------------------------------- Surfaces -------------------------------- */

  MuiPaper: {
    // Elevation 4 is the "cards and panels" shadow (5px offset).
    defaultProps: { elevation: 4 },
    styleOverrides: {
      root: ({ theme }) => ({
        // No dark-mode elevation overlay: surfaces are flat colours.
        backgroundImage: "none",
        borderRadius: theme.vars.shape.borderRadiusXl,
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
            },
          },
          {
            props: { variant: "elevation" },
            style: {
              border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
            },
          },
        ],
      }),
    },
  },

  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadiusXl,
      }),
    },
  },

  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadiusXxl,
        boxShadow: theme.elevation.lg,
      }),
    },
  },

  MuiTooltip: {
    defaultProps: { arrow: false },
    styleOverrides: {
      tooltip: ({ theme }) => ({
        ...theme.typography.caption,
        fontWeight: 600,
        padding: theme.spacing(1.5, 3),
        borderRadius: theme.vars.shape.borderRadiusMd,
        backgroundColor: theme.vars.palette.code.background,
        color: theme.vars.palette.code.text,
        border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
      }),
    },
  },

  /* --------------------------------- Actions --------------------------------- */

  MuiButton: {
    // The hard offset shadow comes from the overrides below, not MUI's elevation.
    defaultProps: { disableElevation: true, disableRipple: true },
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: 48,
        padding: theme.spacing(0, 5),
        borderRadius: theme.vars.shape.borderRadiusMd,
        variants: [
          {
            props: { size: "small" },
            style: {
              minHeight: 40,
              padding: theme.spacing(0, 3.5),
              fontSize: "0.875rem",
            },
          },
          {
            props: { size: "large" },
            style: {
              minHeight: 52,
              padding: theme.spacing(0, 6),
              fontSize: "1rem",
            },
          },
          {
            props: props => props.variant !== "text",
            style: {
              border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
              boxShadow: theme.elevation.sm,
              "&:hover": { boxShadow: theme.elevation.sm },
              "&.Mui-disabled": { boxShadow: "none" },
            },
          },
        ],
      }),
    },
  },

  MuiIconButton: {
    defaultProps: { disableRipple: true },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadiusMd,
      }),
    },
  },

  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 46,
        height: 46,
        borderRadius: theme.vars.shape.borderRadiusMd,
        border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
        boxShadow: theme.elevation.sm,
      }),
    },
  },

  /* ---------------------------------- Chips ---------------------------------- */

  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadiusPill,
        border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
        fontWeight: 700,
      }),
    },
  },

  /* ------------------------------ Form controls ------------------------------ */

  MuiTextField: {
    defaultProps: { variant: "outlined", fullWidth: true },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadiusMd,
        backgroundColor: theme.vars.palette.background.surface,
      }),
      input: ({ theme }) => ({
        padding: theme.spacing(3, 3.5),
      }),
      notchedOutline: ({ theme }) => ({
        borderWidth: theme.borders.width,
        borderColor: theme.vars.palette.outline,
      }),
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: { fontWeight: 700 },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: { fontWeight: 600 },
    },
  },

  MuiCheckbox: {
    defaultProps: { disableRipple: true },
  },
  MuiRadio: {
    defaultProps: { disableRipple: true },
  },
  MuiSwitch: {
    defaultProps: { disableRipple: true },
  },

  MuiRating: {
    defaultProps: { precision: 0.5 },
    styleOverrides: {
      iconFilled: ({ theme }) => ({ color: theme.vars.palette.accent.main }),
    },
  },

  /* ------------------------------- Navigation -------------------------------- */

  MuiTabs: {
    defaultProps: { variant: "scrollable", scrollButtons: "auto" },
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
      }),
      indicator: ({ theme }) => ({
        height: 4,
        borderRadius: `${theme.vars.shape.borderRadiusSm} ${theme.vars.shape.borderRadiusSm} 0 0`,
      }),
    },
  },

  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: 48,
        padding: theme.spacing(0, 4),
        borderRadius: `${theme.vars.shape.borderRadiusMd} ${theme.vars.shape.borderRadiusMd} 0 0`,
      }),
    },
  },

  /* -------------------------------- Feedback --------------------------------- */

  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadiusMd,
        border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
        color: theme.vars.palette.text.primary,
        // Standard alerts use the "-soft" tint (palette `light`) of their severity.
        variants: (["success", "info", "warning", "error"] as const).map(
          severity => ({
            props: { variant: "standard" as const, severity },
            style: { backgroundColor: theme.vars.palette[severity].light },
          }),
        ),
      }),
      message: { fontWeight: 500 },
    },
  },

  MuiCircularProgress: {
    defaultProps: { color: "primary" },
  },

  MuiSkeleton: {
    defaultProps: { animation: "wave" },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.vars.palette.background.surfaceAlt,
      }),
    },
  },
};
