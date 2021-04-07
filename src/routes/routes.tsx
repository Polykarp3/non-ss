import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalFeed from './pages/globalFeed';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
    </Switch>
  );
};

export default Routes;