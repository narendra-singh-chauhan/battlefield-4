import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography:{
    fontFamily: 'Rajdhani',
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles 
        styles={{
          '*::-webkit-scrollbar': {
            width: '0em',
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '0px solid slategrey',
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
