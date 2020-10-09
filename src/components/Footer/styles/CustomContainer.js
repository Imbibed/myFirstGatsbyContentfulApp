import styled from 'styled-components'
import { Container } from 'mailjet-react-components';

const CustomContainer = styled(Container)`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.sizes.paddings.p5} ${({theme}) => theme.sizes.paddings.p4};
`;

export default CustomContainer;