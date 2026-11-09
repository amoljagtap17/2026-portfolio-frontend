import { sitemap } from "components/routes/sitemap";

export interface INavItem {
  label: string;
  /** Absolute path, e.g. "/about". */
  path: string;
}

// The routes that appear in navigation (Header nav, mobile Drawer, Footer
// "Explore"). Derived from the sitemap: a route is in nav iff it has a navLabel.
export const navItems: INavItem[] = sitemap.flatMap(({ navLabel, path }) =>
  navLabel ? [{ label: navLabel, path }] : [],
);
