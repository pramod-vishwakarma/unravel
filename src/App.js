import React from 'react';

import { ThemeProvider} from '@mui/material/styles';
import theme from './assets/theme/theme';
import './App.css';
import HomePage from './pages/homePage';
function App() {
  return (
    <React.Fragment>
    <ThemeProvider theme={theme} >
    <div className="App">
      <HomePage/>
    </div>
    </ThemeProvider>
  </React.Fragment>
  );
}

export default App;
