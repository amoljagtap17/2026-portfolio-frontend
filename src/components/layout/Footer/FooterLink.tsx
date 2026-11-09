import Link from "@mui/material/Link";
import type { SxProps, Theme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router";

export interface IFooterLinkProps {
  children: React.ReactNode;
  /** Internal route, e.g. "/about" (client-side navigation). */
  to?: string;
  /** External URL (opens in a new tab). */
  href?: string;
  /** With neither `to` nor `href`, renders a <button> that runs this. */
  onClick?: () => void;
  /** `default` for link columns, `muted` for the copyright row. */
  tone?: "default" | "muted";
}

const toneSx: Record<NonNullable<IFooterLinkProps["tone"]>, SxProps<Theme>> = {
  default: {
    display: "flex",
    alignItems: "center",
    minHeight: 36,
    fontSize: 15,
    color: "footer.text",
    "&:hover": { color: "footer.hover" },
  },
  muted: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    color: "footer.mutedText",
    "&:hover": { color: "footer.hover" },
  },
};

// One footer link. Picks the right element: router link, external anchor, or
// a button (for actions such as "Back to top").
export default function FooterLink({
  children,
  to,
  href,
  onClick,
  tone = "default",
}: IFooterLinkProps) {
  const sx = toneSx[tone];

  if (to) {
    return (
      <Link component={RouterLink} to={to} underline="none" sx={sx}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={sx}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      component="button"
      type="button"
      onClick={onClick}
      underline="none"
      sx={sx}
    >
      {children}
    </Link>
  );
}
