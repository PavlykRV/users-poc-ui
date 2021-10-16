import * as React from 'react';
import { NavLink } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useStyles } from './styles';

const NavItem = ({ route, isNested }) => {
  const classes = useStyles();
  const { path, label, icon } = route;

  const IconComponent = icon;

  return (
    <NavLink
      to={path}
      activeClassName={classes.active}
      className={`${classes.root} ${isNested ? classes.nested : ''}`}
    >
      <ListItemButton component='div'>
        {icon && (
          <ListItemIcon>
            <IconComponent fontSize='small' className={classes.icon} />
          </ListItemIcon>
        )}

        <ListItemText
          primaryTypographyProps={{ fontWeight: isNested ? 400 : 600 }}
          className={classes.text}
          primary={label}
        />
      </ListItemButton>
    </NavLink>
  );
};

export default NavItem;
