import styled from 'styled-components';

const FooterCategoriesTitle = styled.p`
  color: color: ${({theme}) => theme.colors.lightGrey};
  font-size: ${({theme}) => theme.sizes.s4};
  padding-bottom : ${({theme}) => theme.sizes.paddings.p4};
  padding-top : ${({theme}) => theme.sizes.paddings.p4};
`

export default FooterCategoriesTitle;