import styled from 'styled-components'

export const NavContainer = styled.div`
  max-width: 1280px;
  padding-left:${({theme}) => {theme.sizes.margins.m5}};
  padding-right:${({theme}) => {theme.sizes.margins.m5}};
  display:flex;
`;