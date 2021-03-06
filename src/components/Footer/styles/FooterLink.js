import styled from 'styled-components';
import { Link } from 'mailjet-react-components';

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.middleGrey};
  font-size: ${({theme}) => theme.sizes.small};
  padding-bottom: ${({theme}) => theme.sizes.s4};
  padding-top: ${({theme}) => theme.sizes.s3};
  &&:hover {
    color: ${({theme}) => theme.colors.lightGrey};
  }
`

export default FooterLink;