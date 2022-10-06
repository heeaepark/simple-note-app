import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom'
import styled from 'styled-components';
/* pages */
import { Detail } from './Detail';
/* components */
import { Button, BtnWrap } from './../components/Buttons';
import { NoteContent } from '../components/NoteContent'
/* style */
import { flexCenterBetween, flexColCenterStart } from './../style/flex';
import palette from "./../style/palette";


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



const List = function(){
  const navigate = useNavigate();
  
  let getNoteList = localStorage.getItem('noteList');
  getNoteList = JSON.parse(getNoteList);

  const [noteList, setNoteList] = useState(getNoteList);
  const selectList = ['최근생성순', '최근수정순'];
  const [selected, setSelected] = useState('최근생성순');
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if((localStorage.getItem('noteList') != null)) {
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
    }
  }, [selected, searchValue])

  /* 검색창 input value 가져오기 */
  const getSearchValue = function(e){
    const getValue = e.target.value;
    setSearchValue(getValue);
    const copy = [...getNoteList];
    console.log(getValue);

    if (getValue != '') {
      const result = copy.filter((itemList) => {
        if(itemList.title.toUpperCase().includes(searchValue.toUpperCase())) {
          return itemList
        }
      });
      setNoteList(result);
    } else {
      setNoteList(getNoteList);
    }
  }
  return(
    <>
      <Search>
        <SearchInput type="text" placeholder='검색' onChange={ getSearchValue } />
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
        <NoteContent noteList={ noteList } />
      </ScrollFix>
      <BtnWrap className='only'>
        <Button onClick={() => { navigate(process.env.PUBLIC_URL + '/detail') }} palette={palette.blue}>새 노트</Button>
      </BtnWrap> 
    </>
  )
}

export { List }