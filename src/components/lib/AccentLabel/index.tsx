import Typography, { type TypographyProps } from "@mui/material/Typography";

interface IAccentLabelProps {
  children: React.ReactNode;
  /** Any palette path (e.g. "footer.accent") or CSS colour. */
  color?: string;
  sx?: TypographyProps["sx"];
}

// Small uppercase, letter-spaced, accent-coloured label used above a heading,
// a link group or a block of copy (e.g. "EXPLORE", "FOR RECRUITERS").
export default function AccentLabel({
  children,
  color = "primary.ink",
  sx,
}: IAccentLabelProps) {
  return (
    <Typography
      variant="overline"
      component="p"
      sx={[{ color }, ...(sx ? (Array.isArray(sx) ? sx : [sx]) : [])]}
    >
      {children}
    </Typography>
  );
}
