import styled from 'styled-components'
import {keyframes} from 'styled-components'

const fadein = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

export const ContainerSection = styled.section`
  animation: ${fadein} 0.5s;
`;