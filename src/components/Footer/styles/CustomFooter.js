import styled from 'styled-components'

const CustomFooter = styled.footer`
  background-color: rgb(4, 22, 43);
  color: ${({theme}) => theme.colors.lightGrey};
  font-family: "Inter UI", sans-serif;
  margin-top: ${({theme}) => theme.sizes.margins.m5};
`;

export default CustomFooter;