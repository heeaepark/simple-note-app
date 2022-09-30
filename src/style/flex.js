import { css } from 'styled-components';

const flexCenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
const flexColCenterStart = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export { flexCenterBetween, flexCenter, flexColCenterStart }