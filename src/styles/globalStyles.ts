import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #121212;
    --color-bg-2: #212121;
    --color-bg-3: #424242;
    --color-text: #fff;
    --color-primary: #F9A109;
    --color-secondary: #0064b7;
    --color-secondary-alt: #56CCF2;
    --color-danger: #ba000d;
    --color-danger-alt: #fb928d;
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
    color: #90caf9;
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
  .no-margin {
    margin: 0;
  }
`;

export default GlobalStyles;
