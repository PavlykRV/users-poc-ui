import React from 'react';

import { useStyles } from './styles';

const GenericLayout = ({ setAuthorized }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>GenericLayout</h1>
      <button onClick={() => setAuthorized(true)}>Login</button>
    </div>
  );
};

export default GenericLayout;
