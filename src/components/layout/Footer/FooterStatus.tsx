import Box from "@mui/material/Box";
import { keyframes } from "@mui/material/styles";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.65; }
`;

interface IFooterStatusProps {
  /** Status text, e.g. `siteConfig.status`. */
  children: React.ReactNode;
}

// Availability chip with a softly pulsing dot (still when motion is reduced).
export default function FooterStatus({ children }: IFooterStatusProps) {
  return (
    <Box
      component="span"
      sx={{
        alignSelf: "flex-start",
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
        px: 3,
        py: 1.25,
        borderRadius: theme => theme.vars.shape.borderRadiusPill,
        backgroundColor: "footer.statusBackground",
        color: "footer.statusText",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      <Box
        component="span"
        aria-hidden="true"
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "footer.statusDot",
          animation: `${pulse} 3s ease-in-out infinite`,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      />
      {children}
    </Box>
  );
}
