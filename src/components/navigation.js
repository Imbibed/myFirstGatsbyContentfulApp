import React from "react";
import { Link } from "gatsby"

function Navigation ({children}){

  return(
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/julespage">JulesPage</Link></li>
      </ul>
      {children}
    </div>
  )
}

export default Navigation