import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import './index.css';
import 'normalize.css'
import App from './App/';
import registerServiceWorker from './registerServiceWorker';
import app from './App/store/reducers'

let store = createStore(
  app,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
