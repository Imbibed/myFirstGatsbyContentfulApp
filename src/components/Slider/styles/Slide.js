import styled from 'styled-components'

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${props => props.content}');
  background-size: ${props => props.width}px ${props => props.height}px;
  background-repeat: no-repeat;
  background-position: center;
`

export default Slide;