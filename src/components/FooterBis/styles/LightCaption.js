import styled from 'styled-components';
import { Caption } from "mailjet-react-components";
import { styleForDesktop, styleForTabletAndMobile } from '../../../Utils';

const LightCaption = styled(Caption)`
  color: ${({theme}) => theme.colors.neutral._50};
  font-family: "Roboto Regular";
  font-weight: 400;
  text-align: right;
  font-size: ${({theme}) => theme.sizes.s12};
  margin-top: 0px;
  margin-bottom: 0px;

  ${styleForDesktop} {
    margin-left: ${({theme}) => theme.sizes.s5};
  };
  
  ${styleForTabletAndMobile} {
    margin-top: ${({theme}) => theme.sizes.s2};
  };
`

export default LightCaption;