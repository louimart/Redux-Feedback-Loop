
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

// Reducer - Feeling
function feeling(state = 0, action) {
  if (action.type === 'FEELING_LEVEL'){
    console.log('in products reducer', action.payload)
    return action.payload;
  }
  return state;
};

// Reducer - Understanding
function understanding(state = 0, action) {
  if (action.type === 'UNDERSTANDING_LEVEL'){
    return state;
  }
  return state;
};

// Reducer - Support
function support(state = 0, action) {
  if (action.type === 'SUPPORT_LEVEL'){
    return state;
  }
  return state;
};

// Reducer - Comments
function comments(state = 'lost and confused', action) {
  if (action.type === 'COMMENTS'){
    return state;
  }
  return state;
};


// store - combine reducers
export const store = () => createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments,
  }),
  // Middleware
  applyMiddleware(logger)
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );