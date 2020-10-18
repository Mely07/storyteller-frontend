import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}> 
  {/* Provider ensures that our entire React application can access data from the store.  */}
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root')
);



