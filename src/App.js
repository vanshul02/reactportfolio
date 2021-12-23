import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <PortfolioPage />
          </Route>
          <Redirect exact to="/" />
        </Switch>
      </main>
    </Router>
  )
}

export default App
