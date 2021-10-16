import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const { background } = theme.palette || {};

  return {
    root: {
      backgroundColor: background.default,
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      paddingLeft: 230,
      display: 'flex',
      flex: '1 0 100%',
    },
  };
});
