import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as S from "./index.styles";
import { Reset } from "styled-reset";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Reset />
    <S.Layout>
      <S.Box>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </S.Box>
    </S.Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
