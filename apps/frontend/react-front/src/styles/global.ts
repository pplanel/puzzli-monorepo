import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, #app {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "Arial", sans-serif;
  }

  *:not(hr) {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
