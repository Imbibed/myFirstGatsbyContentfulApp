import styled from 'styled-components'
import { styleForTabletAndMobile, styleForMobile, styleForTablet } from '../../../Utils';

const DivRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${styleForTablet} {
    align-items: flex-end;
  }

  ${styleForTabletAndMobile} {
    flex-direction: column;
  }

  ${styleForMobile} {
    padding-top: ${({theme}) => theme.sizes.s6};
  }
`;

export default DivRight;