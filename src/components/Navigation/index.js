import React from "react";
import { Link } from "gatsby"
import styled from 'styled-components'
import {CustomLink} from '../Navigation/styles/CustomLink'
import {CustomSection} from '../Navigation/styles/CustomSection'
import {ContainerSection} from '../Navigation/styles/ContainerSection'

const Navigation =  ({children}) => 
  <>
    <CustomSection>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/blog/">Blog</CustomLink>
      <CustomLink to="/julespage/">JulesPage</CustomLink>
      <CustomLink to="/margotpage/">MargotPage</CustomLink>
    </CustomSection>
    <ContainerSection>
      {children}
    </ContainerSection>
  </>
  
export default Navigation;
