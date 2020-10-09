import styled from 'styled-components'
import { Container } from 'mailjet-react-components';

const ListsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({theme}) => theme.sizes.paddings.p8};
`;

export default ListsContainer;