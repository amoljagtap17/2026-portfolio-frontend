import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { brandedTokens } from "./brandedTokens";
import { brandedComponents } from "./brandedComponents";

const brandedTheme = createTheme({
  ...brandedTokens,
  components: brandedComponents,
});

export default responsiveFontSizes(brandedTheme);
