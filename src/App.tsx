import React from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

import AppContainer from './components/containers/AppContainer/AppContainer';
import teamStore from './stores/team/store';
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
        <TeamContainer />
      </Route>
    </Switch>
  )
}

export default App;