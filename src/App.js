import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
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
