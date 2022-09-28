import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import GlobalStyle from './style/globalStyles'
import { changeMode } from './store'
/* components */
import { Container } from './components/Container';
import Toggle from './components/Toggle'



function App() {
  const isDarkMode = useSelector((state) => {return state.isDarkMode})
  const dispatch = useDispatch();
  console.log(isDarkMode);
  /* const [isDarkMode, setIsDarkMode] = useState(false); */

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div className="App">
          {/* <h1 onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}>테스트용 텍스트으으</h1>  */}
          <Container>
            <Toggle onClick={() => { dispatch(changeMode()) }}/>
          </Container>
        </div>
    </ThemeProvider>
  );
}

export default App;
