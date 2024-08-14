import { Container, Typography } from "@mui/material";
import TodoList from "./components/TodoList";

// MUIサンプルimport
import Sample1 from "./components/Sample1";
import Sample2 from "./components/Sample2";
import Sample3 from "./components/Sample3";
import Sample4 from "./components/Sample4";
import Sample5 from "./components/Sample5";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Todo App
      </Typography>
      <TodoList />

      {/* 以下のコメントアウトを外すとサンプルが表示されます */}
      {/* <Sample1 />
      <Sample2 />
      <Sample3 />
      <Sample4 />
      <Sample5 /> */}

    </Container>
  );
};

export default App;
