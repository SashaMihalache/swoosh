import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/common/layout';
import Portrait from './components/portrait/Portrait';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Portrait} />
    <Route path="/:characterId" component={Portrait} />
  </Route>
);