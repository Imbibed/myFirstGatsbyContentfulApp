import styled from "styled-components";
import { Link } from "gatsby";
import Proptypes from "prop-types";

//transform: scale doesn't work...
export const CustomNavigationLink = styled(Link)`
    margin:0.5rem;
    padding:0.5rem;
    color: ${({ color }) => color || 'black'};
    text-decoration:none;
    &:hover{
      transform: scale(1.1);
    }
    &:active{
      transform: scale(0.9);
    }
`;

CustomNavigationLink.propTypes = {
  color: Proptypes.string,
}

export default CustomNavigationLink

