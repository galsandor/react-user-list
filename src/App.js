import { useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import ThemeToggle from "./components/ThemeToggle";
import UsersData from "./components/UsersData";

function App() {
  const [mode, setMode] = useState("light");

  // Alkalmazás indulásakor betölti az előzőleg elmentett témát (ha van)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setMode(saved);
  }, []);

  // Light/Dark mód váltása + új téma mentése localStorage-be
  const toggleMode = () => {
    setMode((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Új téma létrehozása csak akkor, ha a theme mód (light/dark) változik
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", justifyContent: "flex-end", padding: 10 }}>
        <ThemeToggle mode={mode} onToggle={toggleMode} />
      </div>
      <UsersData />
    </ThemeProvider>
  );
}

export default App;
