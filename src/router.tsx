import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";

const router = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default router;
