import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import './i18n';
import { createRoot } from 'react-dom/client';

import routes from "./data/routes.json";
import stations from "./data/stations.json";
import shapes from "./data/shapes.json";
import solutions from "./data/solutions.json";
import answers from "./data/answers.json";
import { WrappedAboutModal } from './components/WrappedAboutModal';
import { GameWrapper } from '@ubahndle/core';

const root = createRoot(document.getElementById("root")!!);
root.render(
  <React.StrictMode>
    <GameWrapper
      data={{
        routes,
        stations,
        shapes,
        solutions,
        answers,
      }}
      AboutComponent={WrappedAboutModal}
      initialMapSettings={{
        latitude: 50.1180118,
        longitude: 8.6835449,
        zoom: 10.08,
      }} />
  </React.StrictMode>
);
