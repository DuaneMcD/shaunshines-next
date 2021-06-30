import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export default function NextIndexWrapper() {
  return <App configuration={window.appConfig} />;
}

registerServiceWorker();
