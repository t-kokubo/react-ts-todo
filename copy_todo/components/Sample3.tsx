import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

// このサンプルでは「ダッシュボードのグリッドレイアウト」が表示されます

function Sample3() {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
          <Typography variant="h6">売上</Typography>
          <Typography variant="h4">$5,000</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
          <Typography variant="h6">新規ユーザー</Typography>
          <Typography variant="h4">50</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
          <Typography variant="h6">総訪問者数</Typography>
          <Typography variant="h4">1,200</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Sample3;
