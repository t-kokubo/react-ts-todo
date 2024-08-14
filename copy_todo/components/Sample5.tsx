import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';

// このサンプルでは「カスタムボタン」が表示されます

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ff5722',
    },
  },
});

function Sample5() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        カスタムボタン
      </Button>
      <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
        セカンダリボタン
      </Button>
    </ThemeProvider>
  );
}

export default Sample5;
