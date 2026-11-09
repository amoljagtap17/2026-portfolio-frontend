import Box from "@mui/material/Box";
import Spinner from "components/lib/Spinner";

export default function RouteFallback() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
      }}
    >
      <Spinner />
    </Box>
  );
}
