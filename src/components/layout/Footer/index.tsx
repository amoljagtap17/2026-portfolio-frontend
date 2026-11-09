import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { siteConfig } from "app/config/site";
import { navItems } from "../navItems";
import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterNav, { type IFooterNavLink } from "./FooterNav";
import FooterNow from "./FooterNow";

export { default as FooterBottom } from "./FooterBottom";
export { default as FooterBrand } from "./FooterBrand";
export { default as FooterNav } from "./FooterNav";
export { default as FooterNow } from "./FooterNow";

const exploreLinks: IFooterNavLink[] = navItems.map(({ label, path }) => ({
  label,
  to: path,
}));

const builderLinks: IFooterNavLink[] = [
  { label: "Source code", href: siteConfig.social.github },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "footer.background",
        color: "footer.heading",
        borderTop: theme =>
          `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
      }}
    >
      {/* Decorative concentric rings, bottom right */}
      <Box
        component="svg"
        aria-hidden="true"
        viewBox="0 0 400 400"
        sx={{
          position: "absolute",
          right: -120,
          bottom: -160,
          width: 520,
          height: 520,
          opacity: 0.08,
          pointerEvents: "none",
        }}
      >
        {[190, 130, 70].map(r => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="#E8A33D"
            strokeWidth="2"
          />
        ))}
      </Box>

      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          pt: { xs: 14, md: 20 },
          pb: 7,
        }}
      >
        <FooterBrand />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px 64px",
            pt: 9,
            borderTop: "1px solid",
            borderColor: "footer.border",
          }}
        >
          <FooterNav title="Explore" links={exploreLinks} />
          <FooterNav title="For builders" links={builderLinks} />
          <FooterNow />
        </Box>

        <FooterBottom />
      </Container>
    </Box>
  );
}
