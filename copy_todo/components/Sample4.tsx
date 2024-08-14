import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

// このサンプルでは「ログインフォーム」が表示されます

function Sample4() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h5">ログイン</Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            ログイン
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Sample4;
