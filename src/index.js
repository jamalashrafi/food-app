import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import './index.css';
import reducers from './reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
})
const middleware = [thunk, loggerMiddleware];
const composeEnhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(reducers,
  composeEnhancer
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
