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
import Dashboard from './containers/Dashboard';

// Dashbboard Components
import Profile from './components/Dashboard/Profile/Profile.js';
import PlaceHolder from './components/PlaceHolder.js';

import Stats from './components/Dashboard/Items/Stats.js';
import Goals from './components/Dashboard/Items/Goals.js';
import Challenges from './components/Dashboard/Items/Logs.js';
import Teams from './components/Dashboard/Items/Teams.js';
import Tips from './components/Dashboard/Items/Tips.js';

import GeoMap from './components/GeoMap/GeoMap';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="postdoc" component={PostDoc} />
        <Route path="home" component={Home} />
        <Route path="dashboard" component={Dashboard} >
          <IndexRoute component={Profile} />
          <Route path="/settings"component={PlaceHolder} />
          <Route path="/dashboard/log"component={PlaceHolder} />
          <Route path="/dashboard/stats"component={Stats} />
          <Route path="/dashboard/goals"component={PlaceHolder} />
          <Route path="/dashboard/challenges"component={PlaceHolder} />
          <Route path="/dashboard/teams"component={PlaceHolder} />
          <Route path="/dashboard/tips"component={PlaceHolder} />
          <Route path="/dashboard/geomap" component={GeoMap} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
