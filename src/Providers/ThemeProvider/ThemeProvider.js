import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from './ThemeContext';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const ThemeProviderComp = ({ children }) => {
  const [currentTheme, setTheme] = useState(THEMES.LIGHT);
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            padding: '0 10px',
            height: '50px',
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: '30px',
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            color: 'inherit',
            textTransform: 'uppercase',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            verticalAlign: 'top',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '2px',
            padding: '2px',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { padding: '4px 8px', borderRadius: '2px' },
        },
      },
    },
    palette: {
      brand: {
        red: '#FF483D',
        secondaryRed: '#FFF4F3',
        blue: '#1268FB',
        secondaryBlue: '#1D7AFD',
        secondaryBlue2: '#E5F0FF',
        secondaruBlue3: '#F7F9FA',
      },
      mode: currentTheme,
    },
    typography: {
      fontFamily: 'Source Sans Pro',
      h1: {
        fontSize: '36px',
        fontWeight: '400',
        lineHeight: '44px',
        letterSpacing: '0.25px',
      },
      h2: {
        fontSize: '28px',
        fontWeight: '400',
        lineHeight: '34px',
        letterSpacing: '0.25px',
      },
      h3: {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '30px',
        letterSpacing: '0.25px',
      },
      h4: {
        fontSize: '22px',
        fontWeight: '400',
        lineHeight: '28px',
        letterSpacing: '0.25px',
      },
      h5: {
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '0.25px',
      },
      h6: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '22px',
        letterSpacing: '0.25px',
      },
      body1: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '18px',
      },
      body2: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14px',
      },
      subtitle1: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '16px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      },
      subtitle2: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '24px',
        letterSpacing: '0.25px',
      },
      caption: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14px',
        letterSpacing: '0.5px',
      },
      button: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
        letterSpacing: '0.5px',
      },
    },
  });
  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderComp;
