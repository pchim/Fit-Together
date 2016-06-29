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
import PlaceHolder from './components/PlaceHolder.js';

import Stats from './components/Dashboard/Items/Stats.js';
import Challenges from './components/Dashboard/Items/Challenges/Challenges';
import Teams from './containers/Teams'; // redux container
// import TeamMemberList from './containers/TeamMemberList'; // redux container
import Tips from './components/Dashboard/Items/Tips.js';
import UserInfo from './components/Dashboard/Items/Settings';
import Logbook from './components/Dashboard/Items/Logbook/Logbook';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="/signup" component={Signup} />
        <IndexRoute component={Home} />
        <Route path="/dashboard" component={Dashboard} >
          <IndexRoute component={Profile} />
          <Route path="/dashboard/settings"component={UserInfo} />
          <Route path="/dashboard/logbook"component={Logbook} />
          <Route path="/dashboard/stats"component={Stats} />
          <Route path="/dashboard/challenges"component={Challenges} />
          <Route path="/dashboard/teams"component={Teams} />
          <Route path="/dashboard/tips"component={PlaceHolder} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

            // <Route path="/dashboard/teams"component={TeamMemberList} />
          // </Route>

          // <Route path="/dashboard/:username/settings"component={UserInfo} />
          // <Route path="/dashboard/:username/log"component={PlaceHolder} />
          // <Route path="/dashboard/:username/stats"component={Stats} />
          // <Route path="/dashboard/:username/challenges"component={PlaceHolder} />
          // <Route path="/dashboard/:username/teams"component={Teams} />
          // <Route path="/dashboard/:username/tips"component={PlaceHolder} />



