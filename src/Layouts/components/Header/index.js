import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';

import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import logo from '../../../assets/images/logo.svg';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'relative',
      height: 80,
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      boxShadow: theme.shadows[6],
      zIndex: 1,
    },
    logo: {
      display: 'block',
      width: 48,
      height: 48,
    },
    controls: {
      margin: '0 0 0 auto',
      display: 'flex',
    },
    location: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
    },
    locationLabel: {
      margin: '0 8px 0 0',
    },
    user: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      margin: '0 20px',
    },
  };
});

const Header = () => {
  const classes = useStyles();

  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <img src={logo} alt='' />
      </div>

      <div className={classes.controls}>
        <div className={classes.location}>
          <InputLabel
            id='location-select-label'
            className={classes.locationLabel}
          >
            Location:
          </InputLabel>
          <Select
            sx={{ minWidth: 200 }}
            size='small'
            labelId='location-select'
            id='location-select'
            value={location}
            onChange={handleChange}
          >
            <MenuItem value={10}>America</MenuItem>
            <MenuItem value={20}>Europe</MenuItem>
            <MenuItem value={30}>Asia</MenuItem>
          </Select>
        </div>
        <div className={classes.user}>
          <Avatar sx={{ width: 44, height: 44 }} className={classes.avatar}>
            A
          </Avatar>
          <Button
            id='demo-customized-button'
            aria-controls='demo-customized-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            variant='text'
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Admin
          </Button>
          <StyledMenu
            id='demo-customized-menu'
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <NotificationImportantOutlinedIcon />
              Alerts
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <EqualizerOutlinedIcon />
              Analytics
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <AccountCircleOutlinedIcon />
              Admin
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <InfoOutlinedIcon />
              Info Centre
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <LogoutOutlinedIcon />
              Log out
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
