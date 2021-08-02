/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from 'react-router-dom';
import Pages from './pages';

function App() {
  return (
    <Switch>
      <Route path='/' component={Pages} />
    </Switch>
  );
}

export default App;
