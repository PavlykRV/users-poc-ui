import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Sidebar } from '../components';

import { useStyles } from './styles';

const ProtectedLayout = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Header />
        <Sidebar />
        <main className={classes.main}>
          <Switch>
            <Route exact path='/'>
              <div>Nothing to show</div>
            </Route>
            <Route path='/kiosks'>
              <div>Nothing to show</div>
            </Route>
            <Route path='/users'>
              <div>Nothing to show</div>
            </Route>
            <Route path='/cameras'>
              <div>Nothing to show</div>
            </Route>
            <Route path='/locations'>
              <div>Nothing to show</div>
            </Route>
            <Route path='/tags'>
              <div>Nothing to show</div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default ProtectedLayout;
