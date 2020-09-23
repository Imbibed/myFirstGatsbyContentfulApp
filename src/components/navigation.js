import React from "react";
import { Link } from "gatsby"

export default function Navigation ({children}) {

  return(
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/julespage/">JulesPage</Link></li>
        <li><Link to="/margotpage/">MargotPage</Link></li>
      </ul>
      {children}
    </div>
  )
}