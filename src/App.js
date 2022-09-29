import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import GlobalStyle from './style/globalStyles'
/* components */
import { Container } from './components/Container';
import { Toolbar } from './components/Toolbar';



function App() {
  const isDarkMode = useSelector((state) => {return state.isDarkMode})
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div className="App">
          <Container>
            <Toolbar />
          </Container>
        </div>
    </ThemeProvider>
  );
}

export default App;
