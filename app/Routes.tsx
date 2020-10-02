/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import Feed from './components/feed/Feed';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.HOME} component={Feed} />
      </Switch>
    </App>
  );
}
