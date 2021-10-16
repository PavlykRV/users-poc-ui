import * as React from 'react';

import List from '@mui/material/List';

import { NavItem, NavItemsGroup } from './components';
import { routes } from './routes';
import { useStyles } from './styles';

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component='nav'>
        {routes.map((route) => {
          return route.subRoutes ? (
            <NavItemsGroup key={route.id} route={route} />
          ) : (
            <NavItem key={route.id} route={route} />
          );
        })}
      </List>
    </div>
  );
};

export default Sidebar;
