import React from "react";
import { Link } from "gatsby"
import styled from 'styled-components'
import {CustomLink} from './styles/CustomLink'
import {CustomSection} from './styles/CustomSection'
import {ContainerSection} from './styles/ContainerSection'

const Navigation =  ({children}) => 
  <>
    <CustomSection>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/blog/">Blog</CustomLink>
      <CustomLink to="/julespage/">JulesPage</CustomLink>
      <CustomLink to="/margotpage/">MargotPage</CustomLink>
      <CustomLink to="/mailjet/">Mailjet</CustomLink>
    </CustomSection>
    <ContainerSection>
      {children}
    </ContainerSection>
  </>
  
export default Navigation;
