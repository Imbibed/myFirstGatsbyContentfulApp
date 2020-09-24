import React from "react";
import CenteredList from "./styles/List";
import ListElement from "./styles/ListElement";
import { CustomNavigationLink } from "../../styles"

const Navigation = ({ children }) =>
  <div>
    <CenteredList>
      <ListElement><CustomNavigationLink to="/">Home</CustomNavigationLink></ListElement>
      <ListElement><CustomNavigationLink color='red' to="/blog/">Blog</CustomNavigationLink></ListElement>
      <ListElement><CustomNavigationLink to="/julespage/">JulesPage</CustomNavigationLink></ListElement>
      <ListElement><CustomNavigationLink color='#2eaeab' to="/margotpage/">MargotPage</CustomNavigationLink></ListElement>
    </CenteredList>
    {children}
  </div>

export default Navigation