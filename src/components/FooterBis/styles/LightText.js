import styled from 'styled-components';
import { styledForTabletAndMobile } from '../../../Utils';

const LightText = styled.p`
  color: ${({theme}) => theme.colors.neutral._40};
  font-family: "Roboto";
  font-weight: 400;
  font-size: ${({theme}) => theme.sizes.s12};
  
  ${styledForTabletAndMobile} {
    margin-top: ${({theme}) => theme.sizes.s3};
  };
`

export default LightText;