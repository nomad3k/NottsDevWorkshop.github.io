import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Homepage from './components/home-page';
import EventPage from './components/event-page';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Homepage} />
      <Route path=':date/:title' component={EventPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
