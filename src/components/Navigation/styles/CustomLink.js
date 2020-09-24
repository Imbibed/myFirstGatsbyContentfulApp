import { Link } from "gatsby"
import styled from 'styled-components'

export const CustomLink = styled(Link)`
  color:black;
  text-decoration:none;
  margin: 0.5rem;
  &:hover{
    transform: scale(1.1);
  }
  &:active{
    transform: scale(0.9);
  }
`;