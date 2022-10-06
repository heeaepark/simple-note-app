import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import { darkMode, lightMode } from './store';
import { lightTheme, darkTheme } from './style/theme';
import GlobalStyle from './style/globalStyles'
/* pages */
import { Detail } from './pages/Detail';
import { List } from './pages/List';
/* components */
import { Container } from './components/Container';
import { Toolbar } from './components/Toolbar';
import { Title } from './components/Title';
import { Button, BtnWrap } from './components/Buttons';




function App() {
  const isDarkMode = useSelector((state) => {return state.isDarkMode});
  const dispatch = useDispatch();

  useEffect(()=> {
    if(localStorage.getItem('noteList') === null) {
      localStorage.setItem('noteList', JSON.stringify( [] ));
    }
    if(localStorage.getItem('theme') == 'false') {
      dispatch(darkMode());
    }
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div className="App">
          <Container>
            <Toolbar />
            <Title />
            <Routes>
              <Route path={process.env.PUBLIC_URL + '/'} element={<List />}></Route>
              <Route path={process.env.PUBLIC_URL + '/detail'} element={<Detail />}>
                <Route path=":paramsId" element={<Detail />} />
              </Route>
            </Routes>
          </Container>
        </div>
    </ThemeProvider>
  );
}

export default App;
