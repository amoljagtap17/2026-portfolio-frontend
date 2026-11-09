import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import brandedTheme from "./brandedTheme";
import type { IChildrenProp } from "app/types";

interface IMuiProviderProps extends IChildrenProp {}

export default function MuiProvider({ children }: IMuiProviderProps) {
  return (
    <ThemeProvider theme={brandedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
