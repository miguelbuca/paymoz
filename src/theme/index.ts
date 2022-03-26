import { createGlobalStyle } from "styled-components";
import GothamBold from "../assets/font/gotham/GothamBold.ttf";
import GothamLight from "../assets/font/gotham/GothamLight.otf";

const theme: Theme = {
  light: {
    color: {
      primary: "#000",
    },
    bgColor: "#fff",
    fontColor: "rgba(0,0,0,.4)",
    body: {
      bgColor: "#EBEBEB",
    },
  },
};

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Gotham',sans-serif !important;
      src: url(${GothamLight}) format('otf'),
          url(${GothamBold}) format('ttf');
    }
    body {
        margin: 0;
        font-family: 'Gotham';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        overflow-x: hidden;
        background-color: ${({ theme }: any) => theme?.light?.body.bgColor};
    }
`;

export { theme, GlobalStyle };
