import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'

function Template({pageContext}){
  console.log(pageContext);
  return(
    <div>
      <Navigation>
        <h1>{pageContext.playerName}</h1>
      </Navigation>
    </div>
  )
}

export default Template;