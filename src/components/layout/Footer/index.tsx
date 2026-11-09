import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { siteConfig } from "app/config/site";
import ConcentricRings from "components/lib/ConcentricRings";
import { navItems } from "../navItems";
import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import { type IFooterLinkItem } from "./FooterLinks";
import FooterNav from "./FooterNav";
import FooterNow from "./FooterNow";

export { default as FooterBottom } from "./FooterBottom";
export { default as FooterBrand } from "./FooterBrand";
export { default as FooterLink } from "./FooterLink";
export { default as FooterLinks } from "./FooterLinks";
export { default as FooterNav } from "./FooterNav";
export { default as FooterNow } from "./FooterNow";
export { default as FooterSocialLinks } from "./FooterSocialLinks";
export { default as FooterStatus } from "./FooterStatus";
export { default as FooterVersion } from "./FooterVersion";

const exploreLinks: IFooterLinkItem[] = navItems.map(({ label, path }) => ({
  label,
  to: path,
}));

const builderLinks: IFooterLinkItem[] = [
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
      <ConcentricRings
        sx={{
          position: "absolute",
          right: -120,
          bottom: -160,
          width: 520,
          height: 520,
        }}
      />

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
