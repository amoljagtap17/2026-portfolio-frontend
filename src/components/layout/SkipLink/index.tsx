import Link from "@mui/material/Link";

interface ISkipLinkProps {
  /** `id` of the element to jump to (it should have `tabIndex={-1}`). */
  targetId: string;
}

// Lets keyboard users jump past the header navigation. Visible only on focus.
export default function SkipLink({ targetId }: ISkipLinkProps) {
  return (
    <Link
      href={`#${targetId}`}
      sx={theme => ({
        position: "absolute",
        top: 8,
        left: 16,
        zIndex: theme.zIndex.tooltip,
        px: 4,
        py: 2,
        borderRadius: theme.vars.shape.borderRadiusMd,
        border: `${theme.borders.width}px solid ${theme.vars.palette.outline}`,
        backgroundColor: theme.vars.palette.background.paper,
        transform: "translateY(-200%)",
        "&:focus": { transform: "none" },
      })}
    >
      Skip to content
    </Link>
  );
}
