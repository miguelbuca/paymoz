import { createGlobalStyle } from "styled-components";

const theme: Theme = {
  light: {
    color: {
      primary: "#000",
    },
    bgColor: "#fff",
    fontColor: "#666666",
    body: {
      bgColor: "#EBEBEB",
    },
  },
};

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        overflow-x: hidden;
        background-color: ${({ theme }: any) => theme?.light?.body.bgColor};
    }
`;

export { theme, GlobalStyle };
