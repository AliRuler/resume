import Header from "./layout/Header"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./pages/Home"; 

import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Home />
      {/* <Link to={`/weather/`}>
                    <Button sx={{bgcolor:'common.white'}}>
                        {'مشاهده 4 روز آینده'}
                    </Button>
                </Link> */}
    </ThemeProvider>
  );
}

 