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
            cursor: 'pointer',
            textDecoration: "none",
            color: "#A5A6FF",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "violet-100",
          backgroundColor: "#130F49",
          border: "1px solid transparent", // Add a border to maintain consistency
          padding: "12px 20px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          '&:hover': {
            backgroundColor: "transparent",
            borderColor: "slategray",
            boxShadow: "none",
            color: "slategray",
          },
        },
        outlined: {
          color: "slategray",
          borderColor: "slategray",
          padding: "12px 20px", 
          fontWeight: "bold",
          transition: "all 0.3s ease",
          '&:hover': {
            backgroundColor: "#130F49",
            color: "text-violet-100",
            borderColor: "#130F49",
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
