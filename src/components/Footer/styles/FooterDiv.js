import styled from 'styled-components'
import { styledForTabletAndMobile } from '../../../Utils';

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: ${({theme}) => theme.sizes.s6} ${({theme}) => theme.sizes.s13};

  ${styledForTabletAndMobile} {
    flex-direction: column;
  }
`;

export default FooterDiv;