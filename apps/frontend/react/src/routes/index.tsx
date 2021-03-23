// Dependencies
import React, { lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';

// Utils
import Route from './route';

// Components
const SignIn = lazy(() => import('~/features/sign-in'));
const HelloPages = lazy(() => import('~/features/hello-pages'));
const WebComponents = lazy(() => import('~/features/web-components'));

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={() => <SignIn />} />
    <Route
      path="/hello-pages"
      exact
      component={() => <HelloPages />}
      isPrivate
    />
    <Route
      path="/web-components"
      exact
      component={() => <WebComponents />}
      isPrivate
    />
    <Redirect to="/hello-pages" />
  </Switch>
);

export default Routes;
