import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './HomePage/reducer';
import routes from './routes';
import promise from 'redux-promise';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();//this can be called only one in the App


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
, document.getElementById('root'));
