import { Switch } from 'react-router-dom';

import { LoginPage } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import initFirebase from '../database/initFirebase';

initFirebase();

export default function Routes() {
  const userIsAuthenticated = true;

  if (!userIsAuthenticated) {
    return (
      <Switch>
        <LoginPage />
      </Switch>
    );
  }

  return (
    <Switch>
      <Dashboard />
    </Switch>
  );
}
