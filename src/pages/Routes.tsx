import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from '../components/Lazy-load';
import Result from '../components/Result';

const Dashboard = lazy(() => import('./Dashboard'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<LazyLoad fullHeight />}>
      <Switch>
        <Route path='/form/dashboard' component={Dashboard} />
        <Route
          path='/form/not-found'
          component={() => (
            <Result
              status='404'
              title='Not Found'
              subTitle='Page does not exists!'
            />
          )}
        />
        <Redirect from='/form' exact to='/form/dashboard' />
        <Redirect to='/form/not-found' />
      </Switch>
    </Suspense>
  );
};

export default Routes;