import Typography from "@mui/material/Typography";

interface IPageHeadingProps {
  children: React.ReactNode;
}

// Page-level h1, sized down from the theme's hero-scale h1 to the site's h2
// scale (matches the design's page headings, e.g. Admin's "Site content").
export default function PageHeading({ children }: IPageHeadingProps) {
  return (
    <Typography variant="h2" component="h1" sx={{ letterSpacing: "-0.01em" }}>
      {children}
    </Typography>
  );
}
