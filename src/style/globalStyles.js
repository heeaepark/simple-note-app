import Reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
  }
  html {
    color: ${(props) => props.theme.textColor};
    background-image: ${(props) => props.theme.bgImg};
    background-size : cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  html, body {
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 16px;
    transition: background-image 0.5s;
  }
  #root, .App {
    height: inherit;
  } .App {
    position: relative;
  }
`

export default GlobalStyle;