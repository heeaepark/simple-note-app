import styled from 'styled-components';
/* style */
import { flexCenterBetween, flexCenter } from './../style/flex';


const BtnWrap = styled.div`
  ${ flexCenterBetween }

  &.only {
    justify-content: flex-end;
  }
`
const Button = styled.button`
  ${ flexCenter }
  height: 32px;
  padding: 0 16px;
  color: #ffffff;
  border-radius: 8px;
  background-color: ${props => props.palette || '#3478F6' };
  cursor: pointer;
  border: none;
`

export { Button, BtnWrap }