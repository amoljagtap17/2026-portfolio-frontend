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
      {/* Anchored to the content's right edge (not the screen's), so on wide
          monitors the rings stay beside the 1200px container. */}
      <ConcentricRings
        sx={theme => ({
          position: "absolute",
          right: `calc(max(0px, (100% - ${theme.breakpoints.values.lg}px) / 2) - 120px)`,
          bottom: -160,
          width: 520,
          height: 520,
        })}
      />

      <Container
        maxWidth="lg"
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
            columnGap: { xs: 6, sm: 16 },
            rowGap: 8,
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
