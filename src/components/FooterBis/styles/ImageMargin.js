import styled from 'styled-components';
import { Image } from "mailjet-react-components";

const ImageMargin = styled(Image)`
  margin-left: ${props => props.ml};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
`

export default ImageMargin;