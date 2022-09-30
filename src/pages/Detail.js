import { useNavigate, } from 'react-router-dom'
import styled from 'styled-components';
/* components */
import { Button, BtnWrap } from './../components/Buttons';
/* style */
import palette from "./../style/palette";
import txtSize from '../style/txtSize';



const NoteInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-bottom: 8px;
  background-color: ${(props) => {return props.theme.noteInput.bgColor}};
  color: ${(props) => {return props.theme.textColor}};
  font-size: ${txtSize.medium};
  border-radius: 8px;
  transition: background-color 0.5s;
  &::placeholder {
    color: ${(props) => {return props.theme.subTextColor}};
  }
`
const NoteTextarea = styled.textarea`
  width: 100%;
  height: calc(100% - 32px - 94px - 60px - 64px - 52px - 20px);
  resize: none;
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${(props) => {return props.theme.noteInput.bgColor}};
  color: ${(props) => {return props.theme.textColor}};
  border-radius: 8px;
  transition: background-color 0.5s;
  &::placeholder {
    color: ${(props) => {return props.theme.subTextColor}};
  }
`


const Detail = function() {
  const navigate = useNavigate();
  return(
    <>
      <BtnWrap style={{marginBottom: '28px'}}>
        <Button onClick={() => { navigate(-1) }} palette={palette.yellow}>뒤로가기</Button>
      </BtnWrap>
      <NoteInput type="text" placeholder='노트 제목을 입력해주세요.' />
      <NoteTextarea placeholder='노트 내용을 입력해주세요.'/>
      <BtnWrap>
        <Button onClick={() => { navigate('/') }} palette={palette.red}>노트 제거</Button>
        <Button onClick={() => { navigate('/') }} palette={palette.blue}>확인</Button>
      </BtnWrap>
    </>
  )
}

export { Detail }