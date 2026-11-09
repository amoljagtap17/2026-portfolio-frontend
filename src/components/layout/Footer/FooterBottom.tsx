import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { siteConfig } from "app/config/site";
import { Link as RouterLink } from "react-router";

// Evaluated once at module load (keeps render pure).
const currentYear = new Date().getFullYear();

const linkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  color: "footer.mutedText",
  "&:hover": { color: "footer.hover" },
} as const;

// Copyright row with admin and back-to-top links.
export default function FooterBottom() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        pt: 6,
        borderTop: "1px solid",
        borderColor: "footer.border",
        fontSize: 14,
        color: "footer.mutedText",
      }}
    >
      <span>
        © {currentYear} {siteConfig.name} · Built with Vite, React, Nest,
        GraphQL and Postgres
      </span>

      <Box sx={{ display: "flex", gap: 5 }}>
        <Link component={RouterLink} to="/admin" underline="none" sx={linkSx}>
          Admin
        </Link>
        <Link
          component="button"
          type="button"
          underline="none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={linkSx}
        >
          Back to top
          <ArrowUpwardOutlinedIcon aria-hidden="true" sx={{ fontSize: 16 }} />
        </Link>
      </Box>
    </Box>
  );
}
