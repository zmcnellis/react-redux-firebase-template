import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import EventsPage from './components/event/EventsPage';
import ManageInterests from './components/interests/ManageInterests'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="events" component={EventsPage} />
    <Route path="interests" component={ManageInterests} />
  </Route>
);
