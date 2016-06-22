import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
reducers.routing = routerReducer;

import App from './components/App';
import PostDoc from './containers/PostDoc';
import Home from './containers/Home';

// Dashboard components
import Main from './containers/Main';
import PatientProfile from './components/Main/PatientProfile/PatientProfile.js';
import BmiChart from './components/Main/PatientProfile/BmiChart';

// require('jquery');
// require('bootstrap');
// require('bootstrap-material-design');
require('./assets/css/style.scss');

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="postdoc" component={PostDoc} />
        <Route path="home" component={Home} />
        <Route path="dash" component={Main}>
          <IndexRoute component={PatientProfile} />
          <Route path="/dash/log"component={PlaceHolder} />
          <Route path="/dash/stats"component={Stats} />
          <Route path="/dash/goals"component={PlaceHolder} />
          <Route path="/dash/challenges"component={PlaceHolder} />
          <Route path="/dash/teams"component={PlaceHolder} />
          <Route path="/dash/tips"component={PlaceHolder} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
