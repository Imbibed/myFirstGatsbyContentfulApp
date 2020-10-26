import styled from 'styled-components'
import { styledForMobile, styledForTablet } from '../../../Utils';

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${styledForTablet} {
    align-items: stretch;
  };

  ${styledForMobile} {
    flex-direction: column;
    justify-content: center;
  };
`;

export default DivContent;