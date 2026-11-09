import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Box from "@mui/material/Box";
import { siteConfig } from "app/config/site";
import FooterLink from "./FooterLink";

// Evaluated once at module load (keeps render pure).
const currentYear = new Date().getFullYear();

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
        <FooterLink to="/admin" tone="muted">
          Admin
        </FooterLink>
        <FooterLink
          tone="muted"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
          <ArrowUpwardOutlinedIcon aria-hidden="true" sx={{ fontSize: 16 }} />
        </FooterLink>
      </Box>
    </Box>
  );
}
