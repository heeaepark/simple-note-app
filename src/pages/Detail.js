import { useState } from 'react';
import { useNavigate, } from 'react-router-dom'
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';//uuid import
import moment from 'moment'; //timestamp moment.js import
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
  const id = uuidv4();
  const timeStapmp = moment().format('YYYYMMDDHHmmss');
  const [noteTit, setNoteTit] = useState('');
  const [noteBody, setNoteBody] = useState('');
  
  //input value 가져오기
  const getTit = function(e){
    const input = e.target.value
    setNoteTit(input);
    console.log(noteTit);
  }


  //textarea value 가져오기
  const getContent = function(e) {
    const textarea = e.target.value
    setNoteBody(textarea);
    console.log(noteBody);
  }


  const setContent = function() {
    const replaceTxt = noteBody.replaceAll("<br>", "\n");
    const textarea = document.querySelector('#note-body')
    textarea.value(replaceTxt);
  }


  //localstorage에 데이터 저장하기
  const createNote = function(){
    let getNoteList = localStorage.getItem('noteList');
    getNoteList = JSON.parse(getNoteList);
    getNoteList.push({
      id: id,
      title: noteTit,
      body: noteBody,
      creatAt: timeStapmp,
      updateAt: timeStapmp,
    });
    localStorage.setItem('noteList', JSON.stringify(getNoteList));
    navigate('/');
  }

  const setNote = function(){
    let getNoteList = localStorage.getItem('noteList');
    getNoteList = JSON.parse(getNoteList);
    setNoteTit(getNoteList[0].title)
    setNoteBody(getNoteList[0].body)
  }


  return(
    <>
      <BtnWrap style={{marginBottom: '28px'}}>
        <Button onClick={() => { navigate(-1) }} palette={palette.yellow}>뒤로가기</Button>
      </BtnWrap>
      <NoteInput value={ noteTit } onChange={ getTit } id='note-title' type="text" placeholder='노트 제목을 입력해주세요.' />
      <NoteTextarea value= { noteBody } style={{whiteSpace: 'pre-wrap'}} onChange= { getContent } id='note-body' placeholder='노트 내용을 입력해주세요.'/>
      <BtnWrap>
        <Button onClick={ setNote } palette={palette.red}>노트 제거</Button>
        <Button onClick={ createNote } palette={palette.blue}>확인</Button>
      </BtnWrap>
    </>
  )
}

export { Detail }