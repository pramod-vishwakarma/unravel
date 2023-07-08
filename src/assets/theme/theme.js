import { createTheme, responsiveFontSizes } from '@mui/material/styles';
const theme = responsiveFontSizes(createTheme({
    spacing: 4,
    typography: {
        fontFamily: [
          'SF-Pro-Display-Medium',
          'SF-Pro-Display-Regular',
          '"SF-Pro-Display-Bold"',
          'SF-Pro-Display-Light',
          '"SF-Pro-Display-UltraLight"',
          'sans-serif',
        ].join(','),
        fontSizeRegular:20,
        fontSizeSm:15,
        fontWeightBold:700,
        fontWeightLight:400,
        fontWeightRegular:500,
        fontWeightMedium:600,
      },
    palette: {
        background: {
            default: '#F1F3F9'
        },
        primary: {
            main: '#00857D',//Primary/Shades/20%
        },
        secondary: {
            main: '#F1F3F9',//gray 5%
        },
        error: {
            main: '#D72A2A',//red
        },
        warning: {
            main: '#FC7B09',//orange
        },
        info: {
            main: '#6B7D6A',//gray
        },
        success: {
            main: '#09FE00',//green
        },
        text: {
            primary:'#0B0C15',//gray 100%
            secondary:'#747787',//gray 60%
            gray80:'#424450',//gray 80%
        },
        white:{
            main:'#FFFFFF',
        },
        tint:{
            main:'#CCEDEB'
        },
    },
}));
  
  
export default theme;