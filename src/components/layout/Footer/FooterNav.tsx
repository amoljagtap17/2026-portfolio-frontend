import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router";

export interface IFooterNavLink {
  label: string;
  /** Internal route, e.g. "/about". */
  to?: string;
  /** External URL (opens in a new tab). */
  href?: string;
}

interface IFooterNavProps {
  title: string;
  links: IFooterNavLink[];
}

const linkSx = {
  display: "flex",
  alignItems: "center",
  minHeight: 36,
  fontSize: 15,
  color: "footer.text",
  "&:hover": { color: "footer.hover" },
} as const;

// A titled column of footer links.
export default function FooterNav({ title, links }: IFooterNavProps) {
  return (
    <Box
      component="nav"
      aria-label={title}
      sx={{ display: "flex", flexDirection: "column", gap: 0.5, minWidth: 140 }}
    >
      <Typography variant="overline" sx={{ mb: 2, color: "footer.accent" }}>
        {title}
      </Typography>
      {links.map(({ label, to, href }) =>
        to ? (
          <Link
            key={label}
            component={RouterLink}
            to={to}
            underline="none"
            sx={linkSx}
          >
            {label}
          </Link>
        ) : (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={linkSx}
          >
            {label}
          </Link>
        ),
      )}
    </Box>
  );
}
