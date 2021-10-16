import * as React from 'react';
import { useLocation } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { NavItem } from '..';
import { useStyles } from './styles';

const NavItemsGroup = ({ route }) => {
  const location = useLocation();
  const classes = useStyles();

  const { subRoutes, icon, label } = route;

  const [isOpen, setOpen] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const IconComponent = icon;

  React.useEffect(() => {
    if (subRoutes.some(({ path }) => path === location.pathname)) {
      setActive(true);
      setOpen(true);
      return;
    }
    setActive(false);
  }, [location.pathname, subRoutes, setActive, setOpen]);

  const handleGroupToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <ListItemButton
        onClick={handleGroupToggle}
        className={`${classes.root} ${isActive ? classes.active : ''}`}
      >
        {icon && (
          <ListItemIcon>
            <IconComponent fontSize='small' className={classes.icon} />
          </ListItemIcon>
        )}
        <ListItemText
          className={classes.text}
          primaryTypographyProps={{ fontWeight: 600 }}
          primary={label}
        />
        {isOpen ? (
          <ExpandMore className={classes.arrow} />
        ) : (
          <ChevronRightIcon className={classes.arrow} />
        )}
      </ListItemButton>

      <Collapse in={isOpen} timeout='auto'>
        <List component='div' disablePadding>
          {subRoutes.map((route) => {
            return (
              <NavItem
                key={route.id}
                route={route}
                isNested={!!subRoutes}
                setActive={setActive}
                setOpen={setOpen}
              ></NavItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default NavItemsGroup;
