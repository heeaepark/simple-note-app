import { useEffect, useState } from 'react';
import { useNavigate, } from 'react-router-dom'
import { useParams } from "react-router"
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
  const { paramsId } = useParams();
  const id = uuidv4();
  const timeStamp = moment().format('YYYYMMDDHHmmss');
  const [noteTit, setNoteTit] = useState('');
  const [noteBody, setNoteBody] = useState('');
  let getNoteList = localStorage.getItem('noteList');
  getNoteList = JSON.parse(getNoteList);
  const thisNote = getNoteList.find(v => v.id == paramsId);
  const noteIdx = getNoteList.findIndex(v => v.id == paramsId);
  

  useEffect(() => {

    if ( paramsId === undefined ) {
      setNoteTit('');
      setNoteBody('');
    } else if (paramsId === thisNote.id) {
      setNoteTit(thisNote.title)
      setNoteBody(thisNote.body)
    }
  },[])

  //input value 가져오기
  const getTit = function(e){
    const input = e.target.value
    setNoteTit(input);
  }


  //textarea value 가져오기
  const getContent = function(e) {
    const textarea = e.target.value
    setNoteBody(textarea);
  }



  //localstorage에 데이터 저장하기
  const createNote = function(){
    getNoteList.push({
      id: id,
      title: noteTit,
      body: noteBody,
      creatAt: timeStamp,
      updateAt: timeStamp,
    });
    localStorage.setItem('noteList', JSON.stringify(getNoteList));
    navigate('/');
  }

  return(
    <>
      <BtnWrap style={{marginBottom: '28px'}}>
        <Button onClick={() => { navigate(-1) }} palette={palette.yellow}>뒤로가기</Button>
      </BtnWrap>
      <NoteInput value={ noteTit } onChange={ getTit } id='note-title' type="text" placeholder='노트 제목을 입력해주세요.' />
      <NoteTextarea value= { noteBody } style={{whiteSpace: 'pre-wrap'}} onChange= { getContent } id='note-body' placeholder='노트 내용을 입력해주세요.'/>
      <BtnWrap className={paramsId === undefined ? 'only' : null}>
        {
          paramsId === undefined ? null : 
          <Button onClick={() => {
            const copy = [...getNoteList];
            copy.splice(noteIdx, 1);
            localStorage.setItem('noteList', JSON.stringify(copy));
            navigate('/');
          }} palette={palette.red}>노트 제거</Button>
        }
        <Button onClick={() => {
          if(paramsId === undefined) {
            createNote();
          } else {
            const input = document.querySelector('#note-title');
            const txtarea = document.querySelector('#note-body');
            
            getNoteList[noteIdx].title = input.value;
            getNoteList[noteIdx].body = txtarea.value;
            getNoteList[noteIdx].updateAt = timeStamp;
            localStorage.setItem('noteList', JSON.stringify(getNoteList));
            navigate('/');
          }
        }} palette={palette.blue}>확인</Button>
      </BtnWrap>
    </>
  )
}

export { Detail }