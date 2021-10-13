

import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import Home from "./Pages/Home/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3cd8d7',
      light: '#7cffff',
      dark: '#00a6a6'
    },
    secondary: {
      main: '#aaaaaa',
      light: '#dcdcdc',
      dark: '#7b7b7b'
    }
  },
  typography: {
    fontFamily: "'Be Vietnam','Roboto', sans-serif;"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
