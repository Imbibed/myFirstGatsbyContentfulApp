import styled from 'styled-components'
import TitleCell from './TitleCell'

const Line = styled.tr`
  > td {
    text-align: center;
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
    
  }
  ${TitleCell} {
    text-align: center;
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
  }
`;

export default Line;