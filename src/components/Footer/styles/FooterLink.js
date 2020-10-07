import { Link } from 'mailjet-react-components';
import styled from 'styled-components';

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: rgb(138, 148, 166);
  font-size: 14px;
  padding-bottom : ${({theme}) => theme.sizes.s4};
  padding-top : ${({theme}) => theme.sizes.s3};
  &&:hover {
    color: rgb(201, 206, 214);
  }
`