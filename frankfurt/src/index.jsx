import React from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import './index.css';
import App from './App';

import './i18n';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);
