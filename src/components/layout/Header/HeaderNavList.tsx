import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router";
import { navItems } from "../navItems";

interface IHeaderNavListProps {
  /** `horizontal` for the header bar, `vertical` for the mobile drawer. */
  orientation?: "horizontal" | "vertical";
  /** Called after a link is activated (e.g. to close the drawer). */
  onNavigate?: () => void;
}

// The list of site links, shared by the desktop bar (HeaderNav) and the mobile
// drawer (HeaderDrawer). NavLink sets aria-current="page" on the active link.
export default function HeaderNavList({
  orientation = "horizontal",
  onNavigate,
}: IHeaderNavListProps) {
  const horizontal = orientation === "horizontal";

  return (
    <List
      disablePadding
      sx={{
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        alignItems: horizontal ? "center" : "stretch",
        gap: horizontal ? 0.5 : 1,
      }}
    >
      {navItems.map(({ label, path }) => (
        <ListItem
          key={path}
          disablePadding
          sx={{ width: horizontal ? "auto" : "100%" }}
        >
          {horizontal ? (
            <Button
              component={NavLink}
              to={path}
              // "/" would otherwise match every route.
              end={path === "/"}
              onClick={onNavigate}
              color="inherit"
              sx={{
                minHeight: 44,
                px: 3.5,
                fontWeight: 500,
                color: "text.secondary",
                "&[aria-current='page']": {
                  fontWeight: 600,
                  color: "text.primary",
                  backgroundColor: "background.surfaceAlt",
                },
              }}
            >
              {label}
            </Button>
          ) : (
            <ListItemButton
              component={NavLink}
              to={path}
              end={path === "/"}
              onClick={onNavigate}
              sx={{
                minHeight: 48,
                borderRadius: theme => theme.vars.shape.borderRadiusMd,
                fontWeight: 500,
                "&[aria-current='page']": {
                  fontWeight: 600,
                  backgroundColor: "background.surfaceAlt",
                },
              }}
            >
              <ListItemText
                primary={label}
                slotProps={{ primary: { sx: { fontWeight: "inherit" } } }}
              />
            </ListItemButton>
          )}
        </ListItem>
      ))}
    </List>
  );
}
