import { useNavigate, } from 'react-router-dom'
import styled from 'styled-components';
/* components */
import { Button, BtnWrap } from './../components/Buttons';
/* style */
import { flexCenterBetween, flexColCenterStart } from './../style/flex';
import palette from "./../style/palette";
import txtSize from '../style/txtSize';


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

  return(
    <>
      <Search>
        <SearchInput type="text" placeholder='검색' />
          <Select>
            <option>최근수정순</option>
            <option>최근등록순</option>
            <option>글자순</option>
          </Select>
      </Search>
      <ScrollFix>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
        <Note>
          <h2 className='noteTit'>야호호</h2>
          <p className='noteDate'>2022-09-30</p>
        </Note>
      </ScrollFix>
      <BtnWrap className='only'>
        <Button onClick={() => { navigate('/detail') }} palette={palette.blue}>새 노트</Button>
      </BtnWrap> 
    </>
  )
}

export { List }