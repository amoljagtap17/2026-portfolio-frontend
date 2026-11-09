import Typography, { type TypographyProps } from "@mui/material/Typography";
import { siteConfig } from "app/config/site";
import { fontStackSerif } from "components/providers/MuiProvider/brandedTokens";

type ISiteNameProps = Pick<TypographyProps, "variant" | "sx">;

// The site owner's name, set in the serif display face. Size and weight are
// left to the caller (via `variant` / `sx`) since it is used at several scales.
export default function SiteName({ variant, sx }: ISiteNameProps) {
  return (
    <Typography
      component="span"
      variant={variant}
      sx={[
        { fontFamily: fontStackSerif },
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
    >
      {siteConfig.name}
    </Typography>
  );
}
