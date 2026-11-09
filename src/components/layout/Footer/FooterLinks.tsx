import Box from "@mui/material/Box";
import FooterLink from "./FooterLink";

export interface IFooterLinkItem {
  label: string;
  /** Internal route, e.g. "/about". */
  to?: string;
  /** External URL (opens in a new tab). */
  href?: string;
}

interface IFooterLinksProps {
  links: IFooterLinkItem[];
}

// A vertical list of footer links.
export default function FooterLinks({ links }: IFooterLinksProps) {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        m: 0,
        p: 0,
        listStyle: "none",
      }}
    >
      {links.map(({ label, to, href }) => (
        <li key={label}>
          <FooterLink to={to} href={href}>
            {label}
          </FooterLink>
        </li>
      ))}
    </Box>
  );
}
