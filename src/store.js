
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducer - Feeling
function feeling(state=[], action) {
  if (action.type === 'FEELING_LEVEL'){
    return state;
  }
  return state;
};

// Reducer - Understanding
function understanding(state=[], action) {
  if (action.type === 'UNDERSTANDING_LEVEL'){
    return state;
  }
  return state;
};

// Reducer - Support
function support(state=[], action) {
  if (action.type === 'SUPPORT_LEVEL'){
    return state;
  }
  return state;
};

// Reducer - Comments
function comments(state='', action) {
  if (action.type === 'COMMENTS'){
    return state;
  }
  return state;
};


// store - combine reducers
const storeInstance = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments,
  }),
  // Middleware
  applyMiddleware(logger)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);