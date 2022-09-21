import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ee1739",
    },
    secondary: {
      contrastText: "#6D676E",
      main: "#FFFFFF",
    },
    text: {
      primary: "#6D676E",
      secondary: "#6D676E",
    },
    action: {
      disabledBackground: "#6D676E",
      disabled: "#fff",
    },
    background: {
      paper: "#6D676E",
    },
  },
});
