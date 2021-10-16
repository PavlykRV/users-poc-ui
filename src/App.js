import { Fragment, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { GenericLayout, ProtectedLayout } from './Layouts';
import { ThemeProvider } from './Providers';

const App = () => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <Fragment>
      <CssBaseline />

      <ThemeProvider>
        {authorized ? (
          <ProtectedLayout setAuthorized={setAuthorized} />
        ) : (
          <GenericLayout setAuthorized={setAuthorized} />
        )}
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
