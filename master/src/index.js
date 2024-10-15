import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App2";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};
// 스위치로 위아래 변환할꺼기 때문에 CSS 속성 같은거 사용
const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};
// 큰 회사면 textColor, borderColor, linkColor, linkHoverColor 등등 다양

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
