import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

// このサンプルでは「シンプルカード」が表示されます

function Sample1() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          シンプルカード
        </Typography>
        <Typography variant="body2" color="text.secondary">
          これはMUIを使用して作成したシンプルなカードです。あなたのアプリケーションで簡単に使用できます。
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">詳細を見る</Button>
      </CardActions>
    </Card>
  );
}

export default Sample1;
