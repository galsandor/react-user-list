import { Box, Typography } from "@mui/material";

function ErrorMessage({ message }) {
  return (
    <Box p={4} display="flex" justifyContent="center">
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold" }}
        style={{ color: "red" }}
      >
        {message}
      </Typography>
    </Box>
  );
}

export default ErrorMessage;
