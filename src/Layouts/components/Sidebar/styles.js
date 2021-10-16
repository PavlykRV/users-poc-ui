import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const { background } = theme.palette || {};

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
  };
});
