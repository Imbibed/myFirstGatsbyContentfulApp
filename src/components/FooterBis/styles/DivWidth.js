import styled from 'styled-components';
import { Div } from 'mailjet-react-components'
import { styledForMobile} from '../../../Utils';

const DivWidth = styled(Div)`
  ${styledForMobile} {
    width: ${props => props.width};
  };
`;

export default DivWidth;