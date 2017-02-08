import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CharacterPage from './components/character/CharacterPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CharacterPage} />
    <Route path="/:characterId" component={CharacterPage} />
  </Route>
);