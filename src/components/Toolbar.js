import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode, lightMode } from './../store';
/* components */
import { ToggleBtn, Cirecle } from './Toggle';
/* style */
import { flexCenterBetween } from './../style/flex';
import palette from "../style/palette";

const ToobarInner = styled.div`
  ${flexCenterBetween}
`
const WindowIcons = styled.div`
  ${flexCenterBetween}
`

const WindowDot = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
  background-color: ${ props => props.pallete || null };
  &:last-child {
    margin-right: 0;
  }
`


const Toolbar = function(){
  const isDarkMode = useSelector((state) => {return state.isDarkMode})
  const dispatch = useDispatch();

  const toggleOnClick = function(){
    if(isDarkMode === false) {
      dispatch(darkMode());
    } 
    if(isDarkMode === true) {
      dispatch(lightMode());
    }
  }
  return(
    <ToobarInner>
      <WindowIcons>
        <WindowDot pallete={palette.red}/>
        <WindowDot pallete={palette.yellow}/>
        <WindowDot pallete={palette.green}/>
      </WindowIcons>
      <ToggleBtn isDarkMode={isDarkMode} onClick={ toggleOnClick }>
        <Cirecle isDarkMode={isDarkMode}/>
      </ToggleBtn> 
    </ToobarInner>
  )
}

export { Toolbar }