import { createGlobalStyle } from "styled-components";
import { themes } from "./ColorStyles";

export const GlobalStyle = createGlobalStyle`
  body {
    /* background: ${themes.light.backgroundColor};

    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    } */
    
    background: ${themes.light.backgroundColor};
    color: ${themes.light.text2};
    /* background: linear-gradient(90deg, #030f46 0%, #02051c 100%); */
  }
`;
