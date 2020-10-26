import styled from 'styled-components';
import { Link } from 'mailjet-react-components';
import { styledForMobile } from '../../../Utils';

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.neutral._80};
  font-family: "Roboto";
  font-weight: 400;
  font-size: ${({theme}) => theme.sizes.s12};
  margin-right: ${({theme}) => theme.sizes.s18};
  &&:hover {
    color: ${({theme}) => theme.colors.neutral._60};
  }

  ${styledForMobile} {
    margin-right: 0px;
  }
`

export default FooterLink;