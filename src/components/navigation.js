import React from "react";
import { Link } from "gatsby"
import styled from 'styled-components'

export default function Navigation ({children}) {

  const CustomSection = styled.section`
    display:flex;
    justify-content:center;
    margin:1.5rem 0rem 1.5rem 0rem;
    border: 1px solid black;
  `;

  const CustomLink = styled(Link)`
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

  return(
    <div>
      <CustomSection>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/blog/">Blog</CustomLink>
        <CustomLink to="/julespage/">JulesPage</CustomLink>
        <CustomLink to="/margotpage/">MargotPage</CustomLink>
      </CustomSection>
      {children}
    </div>
  )
}