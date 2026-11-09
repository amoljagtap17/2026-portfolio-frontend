# CLAUDE.md

Personal portfolio website frontend for Amol Jagtap: React 19 + TypeScript + Vite, Material UI v9 (Emotion), React Router v8. The React Compiler is enabled (Babel preset in `vite.config.ts`).

## Commands

```bash
npm run dev               # Vite dev server, http://localhost:3000 (strictPort: fails if 3000 is taken)
npx tsc -b                # type-check (fast; the quickest "does it compile" check)
npm run lint              # oxlint            (npm run lint:fix to autofix)
npm run prettier:check    # npm run prettier:format to write
npm run build             # tsc -b && vite build
```

Before finishing a change, `npx tsc -b`, `npm run lint` and `npm run prettier:check` should all be clean. A husky pre-commit hook runs `prettier --write` via lint-staged. There is no test runner yet.

`npm run build` has been seen to run for many minutes with no output (the Vite devtools plugin is enabled for builds). Don't wait on it for type feedback, use `npx tsc -b`.

## Code conventions

- **Imports:** absolute from `src/` via the `paths` alias, e.g. `components/lib/Logo`, `app/config/site`. Use relative imports only for siblings in the same folder (`./HeaderNavList`, `../navItems`).
- **Components:** one default-exported function component per file. Shared pieces are folders with an `index.tsx` (`components/lib/Logo/index.tsx`). Subcomponents of Header and Footer are flat files inside their folder (`Header/HeaderNavList.tsx`).
- **No re-exports:** `Header/index.tsx` and `Footer/index.tsx` default-export their component only. Do not add barrel `export { default as X }` lines. Import each file directly.
- **Props types:** `interface I<Component>Props` (e.g. `IBrandLinkProps`), declared above the component.
- **Extract early:** when markup or styling repeats, or a component mixes concerns, split it into its own component (this codebase is deliberately finely split, e.g. `FooterLink` / `FooterLinks` / `FooterNav`).
- **React Compiler is on:** don't add manual `useMemo` / `useCallback`. Keep render pure (oxlint flags `new Date()` in render, hoist it to module scope). Prefer deriving values over syncing state in effects.
- **Non-component exports** don't belong in component files (`react/only-export-components` is a warning).
- **Prettier:** double quotes, semicolons, trailing commas, `arrowParens: "avoid"`, 80 columns, imports organized automatically. Just run `npx prettier --write <paths>`.
- **Git:** commit messages are `portfolio-frontend: <lowercase summary>`. Only commit when asked.

## Routing and layout

- `src/components/routes/sitemap.ts` is the **single source of truth** for routes: path, lazy page component, `navLabel` and SEO metadata. `AppRoutes`, `Head`, the Header nav, the mobile drawer and the Footer "Explore" list all derive from it (via `layout/navItems.ts`). To add a page, add one entry there plus the page component. A route with no `navLabel` (e.g. `/admin`) is routable but hidden from navigation.
- `AppLayout` (`components/layout`) renders skip link, `Header`, `<main>`, `Footer`. Page content goes in the `<Outlet />`.
- Site identity (name, monogram, tagline, social links, status) lives in `src/app/config/site.ts`. Several values there are **placeholders** (`TODO`), notably the social URLs and the "Now" copy.

## MUI theme (read this before styling anything)

Files: `src/components/providers/MuiProvider/` (`brandedTokens.ts` = palette/typography/spacing/shape/shadows, `brandedComponents.ts` = component defaults and overrides, `muiAugmentation.d.ts` = TypeScript types for the custom tokens).

- **Look up MUI APIs with the `mui-mcp` tools** (`useMuiDocs`, then `fetchDocs`; configured in `.mcp.json`) against `@mui/material@9.5.0`. Don't rely on memory, v9 differs from older versions.
- **Spacing unit is 4px**, not MUI's usual 8px: `theme.spacing(1)` = 4px, `sx={{ p: 4 }}` = 16px.
- **Light/dark** uses CSS variables with the `.theme-light` / `.theme-dark` class on `<html>`. In `sx` callbacks, `styled` and `styleOverrides`, read colours from **`theme.vars.*`** (e.g. `theme.vars.palette.outline`), never `theme.palette.*`, or dark mode won't apply. String palette paths in `sx` (`"text.secondary"`, `"footer.accent"`) are fine. Don't branch on `theme.palette.mode`.
- **`<Typography color="…">` does not resolve palette paths in v9.** Set colour through `sx={{ color: "footer.accent" }}`.
- **Custom tokens** (typed in `muiAugmentation.d.ts`, update it when you add one): palette `accent`, `outline`, `shadow`, `cta`, `code`, `footer.*`, `background.surface` / `surfaceAlt`, `primary.ink`; `theme.elevation.{sm,md,lg}` (hard offset shadows), `theme.borders.{width,widthThin}`, `theme.vars.shape.borderRadius{Sm,Md,Lg,Xl,Xxl,Pill}`; typography variants `display` and `code`. `palette.X.light` is the design's "-soft" tint.
- **Don't use `responsiveFontSizes()`**: the display / h1 / h2 variants use `clamp()`, which it can't parse.
- Component overrides in the theme are intentionally basic (border, radius, shadow, sizes). Richer styling belongs in dedicated components using `sx` or `styled`.
- Fonts come from `@fontsource/*` with explicit weights (Fraunces for display and headings, Plus Jakarta Sans for body, JetBrains Mono for code). Import the weight CSS you need, the bare package import only ships 400.

## Responsiveness

- **The provided designs only show desktop and mobile. The site must be responsive on large monitors, laptops, tablets and phones.** Don't just map desktop to `md+` and mobile to `xs`. Check the in-between widths and very wide screens.
- MUI breakpoints: xs 0 / sm 600 / md 900 / lg 1200 / xl 1536. The header switches from drawer to inline nav at `md` (matches the design's 900px).
- **Containers use `maxWidth="lg"` (1200px)** everywhere, with the theme's fluid gutters `clamp(16px, 4vw, 48px)`. Don't widen them for big monitors. Prefer `clamp()` and breakpoint values over fixed pixel widths.
- Verify layout changes in a real browser at roughly 320, 390, 768, 900, 1024, 1440, 1920 and 2560px: no horizontal scroll, no overlapping header items, text not wrapping unexpectedly. Headless Chrome (`C:/Program Files/Google/Chrome/Application/chrome.exe`) driven over the DevTools protocol works on this machine. Put any throwaway preview files under `src/` (the path alias only resolves there) and delete them afterwards.
- Accessibility baseline: real `<nav aria-label>`, `aria-current` on the active link, ≥44px touch targets, visible focus ring (theme `focusVisible`), `prefers-reduced-motion` respected for animations.

## Environment

- Env files live in `env_files/` (`envDir` in `vite.config.ts`), only `VITE_*` / `REACT_APP_*` are exposed to the client. `__APP_VERSION__` and `__APP_ENV__` are injected globally by Vite config.
- When adding an env variable, add it to both `env_files/.env` and `env_files/.env.production` **and** declare it in `ImportMetaEnv` in `src/vite-env.d.ts`.
- The env files are committed, and every `VITE_*` value is embedded in the client bundle, so never put secrets in them.
