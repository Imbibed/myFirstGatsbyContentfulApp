import styled from 'styled-components';

export const Container404 = styled.div`
  text-align: center;
  margin-bottom: ${({theme}) => theme.sizes.s8};
  > h2 {
    color: ${({theme}) => theme.colors.statusspam};
    font-size: ${({theme}) => theme.sizes.s15};
  }
  > h3 {
    font-family: serif;
    color: ${({theme}) => theme.colors.darksteel};
  }
`