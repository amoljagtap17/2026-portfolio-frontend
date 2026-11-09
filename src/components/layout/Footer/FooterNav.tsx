import Box from "@mui/material/Box";
import AccentLabel from "components/lib/AccentLabel";
import FooterLinks, { type IFooterLinkItem } from "./FooterLinks";

interface IFooterNavProps {
  title: string;
  links: IFooterLinkItem[];
}

// A titled, labelled column of footer links.
export default function FooterNav({ title, links }: IFooterNavProps) {
  return (
    <Box
      component="nav"
      aria-label={title}
      sx={{ minWidth: { xs: 120, sm: 140 } }}
    >
      <AccentLabel color="footer.accent" sx={{ mb: 2.5 }}>
        {title}
      </AccentLabel>
      <FooterLinks links={links} />
    </Box>
  );
}
