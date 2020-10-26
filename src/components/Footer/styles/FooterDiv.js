import styled from 'styled-components'
import { styleForTabletAndMobile } from '../../../Utils';

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: ${({theme}) => theme.sizes.s6} ${({theme}) => theme.sizes.s13};

  ${styleForTabletAndMobile} {
    flex-direction: column;
  }
`;

export default FooterDiv;