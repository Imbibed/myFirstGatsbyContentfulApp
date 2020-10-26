import styled from 'styled-components';

const CustomFooter = styled.footer`
  background-color: ${({theme}) => theme.colors.sherpa._10};
  color: ${({theme}) => theme.colors.neutral._80};
  margin-top: ${({theme}) => theme.sizes.s5};
  padding-top: ${({theme}) => theme.sizes.s6};
  padding-bottom: ${({theme}) => theme.sizes.s6};
  }
`;

export default CustomFooter;