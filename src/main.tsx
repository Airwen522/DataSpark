import React from 'react';
import ReactDOM from 'react-dom/client';
import '_/assets/style/index.sass';
import { RouterProvider } from "react-router-dom";
import router from './router';
import './assets/style/index.sass';
import './assets/themes/default.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
