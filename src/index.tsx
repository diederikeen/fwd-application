import React from 'react';
import ReactDOM from 'react-dom/client';
import { globalCss } from "@stitches/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./Pages/Home";

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from "./theme";
import { appApi } from "./api";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const globalStyles = globalCss({
  '*' : {
    margin: 0,
    fontFamily: 'Avenir, sans-serif',
  },
  "body": {
    backgroundColor: '$grey800',
    color: '$textPrimary'
  }
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {globalStyles()}
      <ApiProvider api={appApi}>
        <div className={theme}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home/>} />
            </Route>
          </Routes>
        </div>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
