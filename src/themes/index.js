import { createTheme } from "@mui/material/styles";

const themes = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2b77bd",
    },
    secondary: {
      main: "#ffb300",
    },
    background: {
      default: "#141414",
    },
    error: {
      main: "#E50913",
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(82, 82, 83, 1)",
    },
    info: {
      main: "rgba(82, 82, 83, 1)",
    },
  },
});

export default themes;
