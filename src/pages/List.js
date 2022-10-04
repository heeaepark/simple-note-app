import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom'
import styled from 'styled-components';
/* components */
import { Button, BtnWrap } from './../components/Buttons';
/* style */
import { flexCenterBetween, flexColCenterStart } from './../style/flex';
import palette from "./../style/palette";
import txtSize from '../style/txtSize';
import { Detail } from './Detail';


const Search = styled.div`
  ${flexCenterBetween}
  margin-bottom: 28px;
`

const SearchInput = styled.input`
  width: calc(100% - 132px - 8px);
  height: 32px;
  padding: 0 16px;
  color: ${(props) => {return props.theme.textColor}};
  background-color: ${(props) => {return props.theme.searchInput.bgColor}};
  border-radius: 8px;
  transition: background-color 0.5s;
  &::placeholder {
    color: ${(props) => {return props.theme.subTextColor}};
  }
`

const Select = styled.select`
  width: 132px;
  height: 32px;
  padding: 0 30px 0 16px;
  border-radius: 8px;
  color: ${(props) => {return props.theme.textColor}};
  background-color: ${(props) => {return props.theme.noteInput.bgColor}};
  -webkit-appearance: none;
  cursor: pointer;
  background-image: ${(props) => {return props.theme.searchInput.arrow}};
  background-position:  106px center;
  background-repeat: no-repeat;
`

const ScrollFix = styled.div`
  height: calc(100% - 32px - 94px - 58px - 20px - 32px - 20px);
  overflow-y: scroll;
  margin-bottom: 20px;
`

const Note = styled.div`
  ${ flexColCenterStart }
  height: 84px;
  padding: 16px;
  margin-bottom: 8px;
  color: ${(props) => {return props.theme.textColor}};
  background-color: ${(props) => {return props.theme.noteInput.bgColor}};
  border-radius: 8px;
  &:last-child  {
    margin-bottom: 0;
  }
  .noteTit {
    margin-bottom: 8px;
    font-size: ${txtSize.medium};
    font-weight: 500;
  }
  .noteDate {
    font-size: ${txtSize.small};
    color: ${(props) => {return props.theme.subTextColor}};
  }
`
const NoteCotent = styled.div`

`


const List = function(){
  const navigate = useNavigate();
  
  let getNoteList = localStorage.getItem('noteList');
  getNoteList = JSON.parse(getNoteList);

  const [noteList, setNoteList] = useState(getNoteList);
  const selectList = ['최근생성순', '최근수정순'];
  const [selected, setSelected] = useState('최근생성순');

  useEffect(() => {
    if(selected === '최근생성순') {
      const sortCreate = noteList.sort(function(a, b) {
        if (a.creatAt > b.creatAt) {
          return -1
        } else if (a.creatAt < b.creatAt) {
          return 1
        } else {
          return 0
        }
      })
      let copy = [...sortCreate];
      setNoteList(copy);
    } else if (selected === '최근수정순') {
      const sortModi = noteList.sort(function(a, b) {
        if (a.updateAt > b.updateAt) {
          return -1
        } else if (a.updateAt < b.updateAt) {
          return 1
        } else {
          return 0
        }
      })
      let copy = [...sortModi];
      setNoteList(copy);
    }
  }, [selected])

  return(
    <>
      <Search>
        <SearchInput type="text" placeholder='검색' />
          <Select defaultValue={selected} onChange={(e)=> { setSelected(e.target.value); }}>
            {
              selectList.map((item) => {
                return(
                  <option value={ item } key={ item }> { item } </option>
                )
              })
            }
          </Select>
      </Search>
      <ScrollFix>
        <NoteCotent>
          {
            noteList.map((val,idx) => {
              return(
                <Note onClick={() => { navigate('/detail/'+noteList[idx].id) }} key={idx} thisNote={ noteList[idx] }>
                  <h2 className='noteTit'>{ noteList[idx].title }</h2>
                  <p className='noteDate'>{ noteList[idx].creatAt }</p>
                </Note>
              )
            })

          }
          <Routes>
            {
              noteList.map((val,idx) => {
                return(
                  <Route key={idx} path="/detail/:id" element={ <Detail /> } />
                )
              })
            }
          </Routes>
        </NoteCotent>
      </ScrollFix>
      <BtnWrap className='only'>
        <Button onClick={() => { navigate('/detail') }} palette={palette.blue}>새 노트</Button>
      </BtnWrap> 
    </>
  )
}

export { List }