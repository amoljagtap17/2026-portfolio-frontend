import { sitemap } from "components/routes/sitemap";
import { useLocation } from "react-router";

const siteTitle = import.meta.env.VITE_APP_TITLE;
const defaultDescription = import.meta.env.VITE_APP_DESCRIPTION;
const defaultKeywords = import.meta.env.VITE_APP_KEYWORDS;
const siteUrl = import.meta.env.VITE_APP_URL;

// Resolves the active route from the current location itself (via sitemap),
// so callers just render <Head /> with no props — no need to look up or
// thread route metadata down from a layout/route component.
export default function Head() {
  const { pathname } = useLocation();
  const activeRoute = sitemap.find(route => route.path === pathname);

  return (
    <>
      <title>
        {activeRoute?.title ? `${activeRoute.title} · ${siteTitle}` : siteTitle}
      </title>
      <meta
        name="description"
        content={activeRoute?.description ?? defaultDescription}
      />
      <meta
        name="keywords"
        content={activeRoute?.keywords ?? defaultKeywords}
      />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
    </>
  );
}
