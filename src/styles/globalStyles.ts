import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #121212;
    --color-bg-2: #212121;
    --color-bg-3: #424242;
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
    font-family: 'Quicksand', sans-serif;
    line-height: 1.4;
    height: 100%;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
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
  @media (any-hover: hover) {
    ::-webkit-scrollbar {
      width: 0.4rem;
    }
    ::-webkit-scrollbar-track {
      background-color: var(--color-bg-2);
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 0.4rem;
    }
  }
`;

export default GlobalStyles;
