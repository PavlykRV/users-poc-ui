import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  console.log('theme:', theme);
  const { text, brand } = theme.palette || {};

  return {
    root: {
      display: 'flex',
      textDecoration: 'none',
      fontWeight: 600,
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
    nested: {
      '& $text': {
        textTransform: 'none',
        paddingLeft: 30,
      },
    },
    text: {},
    icon: {
      color: text.primary,
    },
    active: {
      borderRight: `3px solid ${brand.blue}`,
      backgroundColor: `rgba(18, 104, 251, 0.1)`,
      '& $icon, & $text, & $arrow': {
        color: brand.blue,
      },
    },
  };
});
