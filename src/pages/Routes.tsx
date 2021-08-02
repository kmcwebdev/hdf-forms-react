import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from 'src/components/Lazy-load';
import Result from 'src/components/Result';

const Home = lazy(() => import('./Home'));
const Member = lazy(() => import('./member'));
const Event = lazy(() => import('./event'));
const Guest = lazy(() => import('./guest'));

const Routes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className='h-screen'>
          <LazyLoad fullHeight />
        </div>
      }
    >
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/member' component={Member} />
        <Route path='/event' component={Event} />
        <Route path='/guest' component={Guest} />
        <Route
          path='/not-found'
          component={() => (
            <Result
              status='404'
              title='Not Found'
              subTitle='Page does not exists!'
              screenHeight
            />
          )}
        />
        <Redirect from='/' exact to='/home' />
        <Redirect to='/not-found' />
      </Switch>
    </Suspense>
  );
};

export default Routes;
