import React from "react";
import styled from 'styled-components';
import { Link } from 'mailjet-react-components';

const LinkWithColorStyled = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.middleGrey};
  margin-right: ${({theme}) => theme.sizes.s18};
  &&:hover {
    color: ${({theme}) => theme.colors.lightGrey};
  }
`

const LinkWithColor = props => (
  <LinkWithColorStyled disabled={false} {...props} mode="link" size="small" target="_self"/>
)

export default LinkWithColor;