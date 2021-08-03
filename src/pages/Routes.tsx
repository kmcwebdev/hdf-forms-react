import React, { lazy, Suspense, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import LazyLoad from 'src/components/Lazy-load';
import Result from 'src/components/Result';
import { useStore } from 'src/store';
import { FormState } from 'src/utilities/enum/form-state.enum';

const Home = lazy(() => import('./Home'));
const Member = lazy(() => import('./member'));
const Event = lazy(() => import('./event'));
const Guest = lazy(() => import('./guest'));

const Routes: React.FC = () => {
  const { setForm } = useStore();
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split('/').filter((path) => path)[0];
    const transformPath = path.charAt(0).toUpperCase() + path.slice(1);

    if (transformPath === 'Home') {
      setForm(null);
    }

    if (transformPath !== 'Home') {
      setForm(FormState[transformPath as FormState]);
    }
  }, [pathname, setForm]);

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
              subTitle='Seriously?'
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
