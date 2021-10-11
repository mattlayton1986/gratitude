import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Theme overrides go here
  palette: {
    primary: {
      main: '#0cbaba',
    },
    secondary: {
      main: '#380036'
    },
  },
  breakpoints: {
    values: {
      xs: 350,
      sm: 500,
      md: 800,
      lg: 1100,
      xl: 1536,
    }
  }
})

export default theme