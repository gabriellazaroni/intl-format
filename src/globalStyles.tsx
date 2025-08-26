import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --white: #fff;
    --black: #000;

    --gray-100: #F5F5F7;
    --gray-200: #CCCCCC;
    --gray-300: #919191;
    --gray-400: #303234;
    --gray-500: #1C1C1C;
    --gray-600: #161617;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      border: 2px solid transparent;
    }
  }

  html, body, #root {
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-family: "Roboto", sans-serif;
    background-color: var(--gray-600);
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--white) !important;
  }
`