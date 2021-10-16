import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const { text } = theme.palette || {};

  return {
    root: {
      display: 'flex',
      textDecoration: 'none',
      fontWeight: 600,
      '& $arrow': {
        fontSize: 16,
      },
    },
    active: {
      '& $icon, & $text, & $arrow': {
        color: '#1268FB',
      },
    },
    icon: {},
    text: {},
    arrow: {
      color: text.primary,
    },
  };
});
