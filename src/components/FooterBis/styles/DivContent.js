import styled from 'styled-components'
import { styleForMobile, styleForTablet } from '../../../Utils';

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${styleForTablet} {
    align-items: stretch;
  };

  ${styleForMobile} {
    flex-direction: column;
    justify-content: center;
  };
`;

export default DivContent;