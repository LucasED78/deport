import React from 'react';
import { Provider } from 'react-redux';

import {
  Switch,
  Route,
} from 'react-router-dom'

import AppContainer from './components/containers/AppContainer/AppContainer';
import { teamStore } from './stores/team/store';
import stores from './stores/index';
import TeamContainer from './components/containers/TeamContainer/TeamContainer';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Provider store={teamStore}>
          <AppContainer />
        </Provider>
      </Route>

      <Route path="/:teamId">
        <Provider store={stores}>
          <TeamContainer />
        </Provider>
      </Route>
    </Switch>
  )
}

export default App;