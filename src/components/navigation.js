import React from "react";
import { Link } from "gatsby"
import styled from 'styled-components'

export default function Navigation ({children}) {

  const CenteredList = styled.ul`
    display:flex;
    justify-content:center;
  `;

  const ListElement = styled.li`
    list-style-type:none;
    padding:0.5rem;
  `;

  //transform: scale doesn't work...
  const CustomNavigationLink = styled(Link)`
    margin:0.5rem;
    padding:0.5rem;
    color:black;
    text-decoration:none;
    &:hover{
      transform: scale(1.1);
    }
    &:active{
      transform: scale(0.9);
    }
  `;

  return(
    <div>
      <CenteredList>
        <ListElement><CustomNavigationLink to="/">Home</CustomNavigationLink></ListElement>
        <ListElement><CustomNavigationLink to="/blog/">Blog</CustomNavigationLink></ListElement>
        <ListElement><CustomNavigationLink to="/julespage/">JulesPage</CustomNavigationLink></ListElement>
        <ListElement><CustomNavigationLink to="/margotpage/">MargotPage</CustomNavigationLink></ListElement>
      </CenteredList>
      {children}
    </div>
  )
}