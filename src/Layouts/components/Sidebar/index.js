import * as React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import CallSplitOutlinedIcon from '@mui/icons-material/CallSplitOutlined';

import { ThemeContext, THEMES } from '../../../Providers';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  const { background, text } = theme.palette || {};

  return {
    root: {
      backgroundColor: background.default,
      position: 'absolute',
      top: 80,
      left: 0,
      bottom: 0,
      width: 230,
      borderRight: '1px solid #f0f0f0',
      '& nav': {
        padding: 0,
      },
    },
    menuItem: {
      display: 'flex',
      textDecoration: 'none',
      fontWeight: 600,
      '& $subItem': {
        paddingLeft: 40,
        height: 40,
        fontWeight: 400,
      },
      '& div': {
        color: text.primary,
      },
      '& $arrow': {
        fontSize: 16,
      },
    },
    arrow: {
      color: text.primary,
    },
    subItem: {},
    active: {
      borderRight: '3px solid #1268FB',
      backgroundColor: `rgba(18, 104, 251, 0.1)`,
    },
  };
});

const Sidebar = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const { currentTheme, setTheme } = React.useContext(ThemeContext);

  const handleThemeSwitch = () => {
    if (!currentTheme) {
      setTheme(THEMES.LIGHT);
      return;
    }

    setTheme(currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <List
        sx={{ width: '100%', maxWidth: 330, bgcolor: 'background.paper' }}
        component='nav'
      >
        <NavLink
          to='/kiosks'
          activeClassName={classes.active}
          className={classes.menuItem}
        >
          <ListItemButton component='div'>
            <ListItemIcon>
              <RoomOutlinedIcon fontSize='small' />
            </ListItemIcon>

            <ListItemText disableTypography primary='Kiosk management' />
          </ListItemButton>
        </NavLink>

        <ListItemButton onClick={handleClick} className={classes.menuItem}>
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText disableTypography primary='Cameras & Locations' />
          {open ? (
            <ExpandMore className={classes.arrow} />
          ) : (
            <ChevronRightIcon className={classes.arrow} />
          )}
        </ListItemButton>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <NavLink
              to='/cameras'
              activeClassName={classes.active}
              className={classes.menuItem}
            >
              <ListItemButton component='div' className={classes.subItem}>
                <ListItemText disableTypography primary='Cameras' />
              </ListItemButton>
            </NavLink>

            <NavLink
              to='/locations'
              activeClassName={classes.active}
              className={classes.menuItem}
            >
              <ListItemButton component='div' className={classes.subItem}>
                <ListItemText disableTypography primary='Locations & Groups' />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>
        <NavLink
          to='/users'
          activeClassName={classes.active}
          className={classes.menuItem}
        >
          <ListItemButton className={classes.menuItem}>
            <ListItemIcon>
              <GroupsOutlinedIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText disableTypography primary='User Management' />
          </ListItemButton>
        </NavLink>

        <NavLink
          to='/tags'
          activeClassName={classes.active}
          className={classes.menuItem}
        >
          <ListItemButton component='div'>
            <ListItemIcon>
              <LocalOfferOutlinedIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText disableTypography primary='Tags' />
          </ListItemButton>
        </NavLink>

        <NavLink
          to='/camera-settings'
          activeClassName={classes.active}
          className={classes.menuItem}
        >
          <ListItemButton>
            <ListItemIcon>
              <VideoCameraFrontOutlinedIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText disableTypography primary='Camera Settings' />
          </ListItemButton>
        </NavLink>

        <ListItemButton className={classes.menuItem}>
          <ListItemIcon>
            <TuneOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText disableTypography primary='Pipeline management' />
        </ListItemButton>

        <ListItemButton className={classes.menuItem}>
          <ListItemIcon>
            <AutoAwesomeMotionOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText disableTypography primary='Slide Editor' />
        </ListItemButton>

        <ListItemButton className={classes.menuItem}>
          <ListItemIcon>
            <CallSplitOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText disableTypography primary='Workflow Builder' />
        </ListItemButton>
        <input
          type='checkbox'
          checked={currentTheme === THEMES.DARK}
          onChange={handleThemeSwitch}
        />
      </List>
    </div>
  );
};

export default Sidebar;
