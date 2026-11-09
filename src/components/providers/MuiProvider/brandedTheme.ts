import { createTheme } from "@mui/material/styles";
import { brandedComponents } from "./brandedComponents";
import { brandedTokens } from "./brandedTokens";

// Note: responsiveFontSizes() is intentionally not used. The display / h1 / h2
// variants are already fluid via clamp(), which responsiveFontSizes can't parse.
const brandedTheme = createTheme({
  ...brandedTokens,
  components: brandedComponents,
});

export default brandedTheme;
