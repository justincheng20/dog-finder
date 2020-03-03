import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Doglist from './Doglist';
import DogDetail from './DogDetail';

function Routes() {
  return (
    <Switch>
      <Route exact path="/dogs"> <Doglist /></Route>
      <Route exact path="/dogs/:name"> <DogDetail /></Route>
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;