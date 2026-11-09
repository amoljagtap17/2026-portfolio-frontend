import SvgIcon from "@mui/material/SvgIcon";
import { fontStackSerif } from "components/providers/MuiProvider/brandedTokens";

interface ILogoProps {
  /** Rendered width/height in px. */
  size?: number;
  /** Monogram: first letter plain, the rest italic (e.g. "AJ"). */
  initials: string;
  /** Frame stroke colour. Defaults to the theme's `outline` colour. */
  frameColor?: string;
}

// Brand mark: a framed monogram with a marigold notch. The mark itself is the
// same in light and dark mode (it sits on its own dark tile), so its fills are
// fixed brand colours; only the frame stroke follows the theme.
export default function Logo({ size = 40, initials, frameColor }: ILogoProps) {
  const [first = "", ...rest] = initials;

  return (
    <SvgIcon
      viewBox="0 0 48 48"
      sx={theme => ({
        fontSize: size,
        "& .logo-frame": {
          stroke: frameColor ?? theme.vars.palette.outline,
        },
      })}
    >
      <rect
        className="logo-frame"
        x="1"
        y="1"
        width="46"
        height="46"
        rx="13"
        fill="#2B2220"
        strokeWidth="2"
      />
      <rect
        x="5.5"
        y="5.5"
        width="37"
        height="37"
        rx="9"
        fill="none"
        stroke="#E8A33D"
        strokeWidth="1.1"
        opacity="0.85"
      />
      <rect x="20.5" y="3.5" width="7" height="4" fill="#2B2220" />
      <path d="M24 2.9 26.1 5.5 24 8.1 21.9 5.5Z" fill="#E8A33D" />
      <text
        x="24"
        y="31.2"
        textAnchor="middle"
        fontFamily={fontStackSerif}
        fontSize="18.5"
        fontWeight="600"
        letterSpacing="-0.4"
        fill="#F3ECE6"
      >
        {first}
        <tspan fontStyle="italic" fontWeight="500" fill="#F0B65A">
          {rest.join("")}
        </tspan>
      </text>
      <path
        d="M16.5 36.2h15"
        stroke="#E8A33D"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </SvgIcon>
  );
}
