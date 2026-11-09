import Typography from "@mui/material/Typography";
import { fontMono } from "components/providers/MuiProvider/brandedTheme";

interface IEyebrowProps {
  children: React.ReactNode;
}

// Small mono, accent-colored label used above a page/section heading, e.g.
// "/ Content manager" or "07 / Contact" style breadcrumb-ish eyebrows.
export default function Eyebrow({ children }: IEyebrowProps) {
  return (
    <Typography
      sx={{ fontFamily: fontMono, fontSize: 13, color: "primary.main" }}
    >
      {children}
    </Typography>
  );
}
