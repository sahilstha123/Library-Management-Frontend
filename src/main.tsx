import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import ThemeContextProvider from "./theme/ThemeContextProvider";
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);