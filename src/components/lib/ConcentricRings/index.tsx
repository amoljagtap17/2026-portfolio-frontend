import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

interface IConcentricRingsProps {
  /** Ring radii in the 400×400 viewBox, outermost first. */
  radii?: number[];
  /** Stroke colour. Defaults to the brand marigold. */
  color?: string;
  /** Position and size; the rings are purely decorative. */
  sx?: SxProps<Theme>;
}

// Faint decorative concentric rings. Hidden from assistive tech and ignores
// pointer events, so it can sit behind content.
export default function ConcentricRings({
  radii = [190, 130, 70],
  color = "#E8A33D",
  sx,
}: IConcentricRingsProps) {
  return (
    <Box
      component="svg"
      aria-hidden="true"
      viewBox="0 0 400 400"
      sx={[
        { opacity: 0.08, pointerEvents: "none" },
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
    >
      {radii.map(r => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      ))}
    </Box>
  );
}
