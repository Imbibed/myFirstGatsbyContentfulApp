import styled from 'styled-components'
import { styledForTabletAndMobile, styledForMobile } from '../../../Utils';

const DivRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${styledForTabletAndMobile} {
    flex-direction: column;
  }

  ${styledForMobile} {
    padding-top: ${({theme}) => theme.sizes.s5};
  }
`;

export default DivRight;