import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
/* style */
import { flexCenterBetween, flexColCenterStart } from '../style/flex';
import palette from "../style/palette";
import txtSize from '../style/txtSize';

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
    min-height: 20px;
    margin-bottom: 8px;
    font-size: ${txtSize.medium};
    font-weight: 500;
  }
  .noteDate {
    font-size: ${txtSize.small};
    color: ${(props) => {return props.theme.subTextColor}};
  }
`
const NoteContent = function(props) {
  const navigate = useNavigate();
  const noteList = props.noteList;
  if(localStorage.getItem('noteList') != null) {
    return (
      noteList.map((val,idx) => {
        return(
          <Note onClick={() => { navigate('/detail/'+noteList[idx].id) }} key={idx} >
            <h2 className='noteTit'>{ noteList[idx].title }</h2>
            <p className='noteDate'>{ noteList[idx].updateAt } 수정했어요.</p>
          </Note>
        )
      })
    )
  }
}

export { NoteContent }