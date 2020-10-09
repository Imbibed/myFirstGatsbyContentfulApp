import { Link } from 'mailjet-react-components';
import styled from 'styled-components';

export const LinkWithColor = styled(Link)`
  text-decoration: none;
  color: rgb(138, 148, 166);
  margin-right: ${({theme}) => theme.sizes.s18};
  &&:hover {
    color: rgb(201, 206, 214);
  }
`