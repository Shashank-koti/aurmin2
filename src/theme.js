import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#38BDF8', // Sky Blue
    },
    secondary: {
      main: '#0284C7', // Darker Blue for hover/contrast
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b', // Slate 800
      secondary: '#64748b', // Slate 500
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
        containedPrimary: {
          color: '#ffffff',
          boxShadow: '0 4px 14px 0 rgba(56, 189, 248, 0.39)',
          '&:hover': {
            backgroundColor: '#0284C7',
            boxShadow: '0 6px 20px rgba(56, 189, 248, 0.23)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;
