import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #121212;
    --color-text: #fff;
    --color-primary: #F9A109;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-size: 1.6rem;
    font-family: system-ui, sans-serif;
    height: 100%;
    margin: 0;
  }
  #root {
    height: 100%;
  }
  .app {
    height: 100%;
    overflow: hidden;
  }
  .layout {
    height: 100%;
    display: grid;
    grid-template-columns: 6.2rem 1fr;
    @media (min-width: 56.25em) {
      grid-template-columns: 9.4rem 1fr;
	  }
  }
`;

export default GlobalStyles;
