import { Box, Typography } from "@mui/material";

function Loader() {
  return (
    <Box p={4} display="flex" justifyContent="center">
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
        Betöltés... ⏳
      </Typography>
    </Box>
  );
}

export default Loader;
