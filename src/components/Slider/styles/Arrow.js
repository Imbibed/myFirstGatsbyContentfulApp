
import styled from 'styled-components';

const Arrow = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
    &:focus {
      outline: 0;
    }
  }
`

export default Arrow;