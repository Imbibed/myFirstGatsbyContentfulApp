import styled from 'styled-components'
import { styledForMobile, styledForTablet } from '../../../Utils';

const ListCategories = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({theme}) => theme.sizes.s8} ${({theme}) => theme.sizes.s5} ${({theme}) => theme.sizes.s13};

  ${styledForMobile} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    padding: 0 ${({theme}) => theme.sizes.s8} ${({theme}) => theme.sizes.s5} ${({theme}) => theme.sizes.s8};
  }

  ${styledForTablet} {
    display: grid;
    grid-template-columns: 33% 33% 1fr;
    grid-template-rows: 50% 50%; 
    padding: 0 ${({theme}) => theme.sizes.s8} ${({theme}) => theme.sizes.s5} ${({theme}) => theme.sizes.s8};
  }
`;

export default ListCategories;