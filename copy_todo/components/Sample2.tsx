import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// このサンプルでは「ナビゲーションバー」が表示されます

function Sample2() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit">ホーム</Button>
        <Button color="inherit">サービス</Button>
        <Button color="inherit">お問い合わせ</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Sample2;
