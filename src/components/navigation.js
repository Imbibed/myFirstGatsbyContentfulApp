import React from "react";
import { Link } from "gatsby"

export default function Navigation (props) {

  return(
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/julespage/">JulesPage</Link></li>
      </ul>
      {children}
    </div>
  )
}