import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Dashboard, Profile } from './views';

const Routes = () => (
  <Router>
    <Route path="/" exact component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </Router>
);

export { Routes };