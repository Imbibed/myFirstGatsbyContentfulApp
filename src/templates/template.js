import React from 'react'
import { graphql } from 'gatsby'

function Template({pageContext}){
  const { product } = pageContext;
  console.log({ product });
  return(
    <div>
      <Navigation>
        <h1>test</h1>
      </Navigation>
    </div>
  )
}

export default Template;