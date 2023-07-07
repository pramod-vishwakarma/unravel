import { createTheme, responsiveFontSizes } from '@mui/material/styles';
const theme = responsiveFontSizes(createTheme({
    spacing: 4,
    typography: {
        h1: {
            fontSize: '5rem',
        },
        h2: {
            fontSize: '3.5rem',
            fontStyle: 'bold',
        },
        h3: {
            fontSize: '2.5rem',
        },
    },
    palette: {
        background: {
            default: '#fff'//green
        },
        primary: {
            main: '#2B37D4',//indigo
        },
        secondary: {
            main: '#E769A6',//pink
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
            primary: '#000000',//black
            secondary: '#FFFFFF',//white
        },
    },
}));
  
  
export default theme;