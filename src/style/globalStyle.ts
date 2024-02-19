import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: CustomTheme }>`
  body {
    font-family: ${(props) => props.theme.font.openSans};
    color: ${(props) => props.theme.colors.gray};
    margin: 0 !important;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
  },
  ol, ul {
    list-style: none;
  }
`;

export { GlobalStyle as ThemeProvider };