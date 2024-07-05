import React from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import './index.css';
import App from './App';

import './i18n';
import { createRoot } from 'react-dom/client';
import { RoutesContext } from '@ubahndle/core';

import routes from "./data/routes.json";

const root = createRoot(document.getElementById("root")!!);
root.render(
  <React.StrictMode>
    <RoutesContext.Provider value={routes}>
      <App />
    </RoutesContext.Provider>
  </React.StrictMode>
);
