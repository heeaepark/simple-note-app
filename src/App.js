import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, useNavigate, } from 'react-router-dom'
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
/* style */
import palette from "./style/palette";



function App() {
  const isDarkMode = useSelector((state) => {return state.isDarkMode});
  const navigate = useNavigate();

  useEffect(()=> {
    if(localStorage.getItem('noteList') === null) {
      localStorage.setItem('noteList', JSON.stringify( [] ));
    }
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div className="App">
          <Container>
            <Toolbar />
            <Title />
            {/* <Button onClick={() => { navigate('/') }} palette={palette.red}>노트 제거</Button>
            <Button onClick={() => { navigate(-1) }} palette={palette.yellow}>뒤로가기</Button>
            <Button onClick={() => { navigate('/detail') }} palette={palette.blue}>새 노트</Button> */}

            {/* <BtnWrap className='only'>
              <Button onClick={() => { navigate('/detail') }} palette={palette.blue}>새 노트</Button>
            </BtnWrap> */}
            <Routes>
              <Route path="/" element={<List />}></Route>
              <Route path="/detail" element={<Detail />}>
                <Route path=":id" element={<Detail />} />
              </Route>
            </Routes>
          </Container>
        </div>
    </ThemeProvider>
  );
}

export default App;
