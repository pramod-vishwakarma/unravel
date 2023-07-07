import React from 'react';
import './App.css';
import { ThemeProvider} from '@mui/material/styles';
import HomePage from './pages/homepage';
import theme from './assets/theme/theme';
function App() {
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <div className="App">
      <HomePage/>
    </div>
    </ThemeProvider>
  </React.Fragment>
  );
}

export default App;
