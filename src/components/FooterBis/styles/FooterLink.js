import styled from 'styled-components';
import { Link } from 'mailjet-react-components';

const FooterLink = styled(Link)`
  text-decoration: none;

  &&:not(:last-child) {
    margin-right: ${({theme}) => theme.sizes.s5};
  }

  &&:hover {
    text-decoration: underline;
    color: ${({theme}) => theme.colors.neutral._80};
  }

  && > * {
    color: ${({theme}) => theme.colors.neutral._80};
    font-family: "Roboto Regular";
    font-size: ${({theme}) => theme.sizes.s12};
    font-weight: 400;
    line-height: ${({theme}) => theme.sizes.s5};
    text-align: right;
    margin-top: 0px;
    margin-bottom: 0px;
  }  

`

export default FooterLink;