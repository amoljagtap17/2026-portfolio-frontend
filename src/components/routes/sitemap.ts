import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export interface RouteConfig {
  /** Absolute path, e.g. "/about". */
  path: string;
  /** Whether this is the layout's index route. */
  index?: boolean;
  /** Label shown in Header nav / the mobile drawer. Omit to keep the route out of nav (still routable by URL). */
  navLabel?: string;
  component: LazyExoticComponent<ComponentType>;
  /** <Head> title fragment ("About" -> "About · Amol Jagtap"). Omit for the site root. */
  title?: string;
  description?: string;
  keywords?: string;
}

// Single source of truth for every route: page component (lazily loaded),
// nav label, and SEO metadata. AppRoutes, AppLayout (for <Head>), and the
// Header nav all read from this instead of keeping their own lists in sync.
export const sitemap: RouteConfig[] = [
  {
    path: "/",
    index: true,
    navLabel: "Home",
    component: lazy(() => import("./Home")),
  },
  {
    path: "/about",
    navLabel: "About",
    component: lazy(() => import("./About")),
    title: "About",
    description:
      "Learn more about Amol Jagtap — background, experience, and skills as a Frontend Web Developer.",
  },
  {
    path: "/portfolio",
    navLabel: "Portfolio",
    component: lazy(() => import("./Portfolio")),
    title: "Portfolio",
    description:
      "A selection of projects built by Amol Jagtap, showcasing frontend development work with React and modern web technologies.",
  },
  {
    path: "/blog",
    navLabel: "Blog",
    component: lazy(() => import("./Blog")),
    title: "Blog",
    description:
      "Articles and notes from Amol Jagtap on frontend development, React, and building for the web.",
  },
  {
    path: "/life",
    navLabel: "Life",
    component: lazy(() => import("./Life")),
    title: "Life",
    description:
      "Beyond the code — a look at what Amol Jagtap is looking forward to and interested in outside of work.",
  },
  {
    // No navLabel: intentionally not linked from Header nav / the mobile
    // drawer, but still a real, directly-navigable route. Will sit behind a
    // sign-in page later — no auth guard yet.
    path: "/admin",
    component: lazy(() => import("./Admin")),
    title: "Admin",
    description: "Admin dashboard for managing site content.",
  },
];
