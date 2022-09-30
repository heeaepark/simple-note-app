import styled from "styled-components";
import txtSize from "../style/txtSize";

const TitTxt = styled.h1`
  font-weight: 700;
  font-size: ${txtSize.large};
  margin-bottom: 8px;
  `

const SubTitTxt = styled.h2`
  font-weight: 400;
  font-size: ${txtSize.medium};
` 

const Title = function(){
  return(
    <div style={{margin: '10px 0 20px 0',}}>
      <TitTxt>심플 노트</TitTxt>
      <SubTitTxt>잊지않도록 기록하세요.</SubTitTxt>
    </div>
  )
}

export { Title }