import styled from 'styled-components'

const DisplayActiveElement = styled.div`
  transition: 500ms ease-in-out 3s;
  transform: ${props => props.right ? translateX(250) : props => props.left ? translateX(-250) : 0}px;
`

export default DisplayActiveElement;