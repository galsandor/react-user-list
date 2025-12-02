import { IconButton } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggle = ({ mode, onToggle }) => {
  return (
    <IconButton sx={{ ml: 1 }} onClick={onToggle} color="inherit">
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
