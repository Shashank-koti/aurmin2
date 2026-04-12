import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B4A3F', // Dark Olive Green
      light: '#6B7D5B', // Muted Green
      dark: '#2F5D50', // Deep Forest Green
    },
    secondary: {
      main: '#D4AF37', // Golden Yellow
      light: '#E6D3A3', // Light Cream Gold
      dark: '#C9A24B', // Soft Mustard
    },
    error: {
      main: '#C0392B', // Chilli Red
    },
    warning: {
      main: '#E67E22', // Turmeric Orange
    },
    background: {
      default: '#4B4A3F',
      paper: '#2F5D50',
    },
    text: {
      primary: '#F8FAFC', // Off White
      secondary: '#E6D3A3', // Light Cream Gold 
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
        containedPrimary: {
          backgroundColor: '#D4AF37',
          color: '#1F2937',
          boxShadow: '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
          '&:hover': {
            backgroundColor: '#C9A24B',
            boxShadow: '0 6px 20px rgba(212, 175, 55, 0.23)',
          },
        },
        containedSecondary: {
            backgroundColor: '#F8FAFC',
            color: '#1F2937',
            '&:hover': {
              backgroundColor: '#e2e8f0',
            },
        },
        outlinedPrimary: {
          borderColor: '#D4AF37',
          color: '#D4AF37',
          borderWidth: 2,
          '&:hover': {
            borderColor: '#C9A24B',
            borderWidth: 2,
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
          }
        },
        outlinedSecondary: {
            borderColor: '#F8FAFC',
            color: '#F8FAFC',
            borderWidth: 2,
            '&:hover': {
                borderColor: '#E6D3A3',
                color: '#E6D3A3',
                borderWidth: 2,
                backgroundColor: 'rgba(243, 233, 210, 0.1)',
            }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#6B7D5B',
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor: '#2F5D50',
                color: '#F8FAFC',
            }
        }
    }
  },
});

export default theme;
