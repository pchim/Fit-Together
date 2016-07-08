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
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Signup from './containers/Auth';

// Dashbboard Components
import Profile from './components/Dashboard/Profile/Profile.js';
import Stats from './containers/Stats.js';
import Teams from './containers/Teams'; 
import Settings from './components/Dashboard/Items/Settings/Settings';
import Trivia from './containers/Trivia';
import Chat from './components/Dashboard/Items/Teams/Chat';
import Charts from './containers/Charts';

require('./assets/css/style.css');

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="/signup" component={Signup} />
        <Route path="/charts" component={Charts} />
        <Route path="/chat" component={Chat} />
        <IndexRoute component={Home} />
        <Route path="/dashboard" component={Dashboard} >
          <IndexRoute component={Profile} />
          <Route path="/dashboard/settings"component={Settings} />
          <Route path="/dashboard/stats"component={Stats} />
          <Route path="/dashboard/teams"component={Teams} />
          <Route path="/dashboard/trivia" component={Trivia} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
