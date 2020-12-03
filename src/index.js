import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 

ReactDOM.render(
  <Provider store={store}> 
  {/* Provider ensures that our entire React application can access data from the store.  */}
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root')
);



