import { createTheme, ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#130F49",
    },
    secondary: {
      main: "#A5A6FF",
    },
    text: {
      primary: "#130F49",
    },
    info: {
      main: "#A5A6FF",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "gray",
          textDecoration: "none",
          fontWeight: "500",
          transition: 'color 0.5s ease, text-decoration 0.5s ease', 
          "&:hover": {
            cursor : 'pointer',
            textDecoration: "none",
            color: "#A5A6FF",
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
