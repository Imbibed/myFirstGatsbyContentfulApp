import React from "react";
import {Link} from "gatsby"

export default function Navigation (props){

  return(
    <li>
      <ul><Link to="/">HOME</Link></ul>
      <ul><Link to="/blog/">Blog</Link></ul>
      <ul><Link to="/julespage">JulesPage</Link></ul>
    </li>
  )
}