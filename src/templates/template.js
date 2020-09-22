import React from 'react'
import { graphql } from 'gatsby'

function Template(props){
  return(
    <div>
      <Navigation></Navigation>
    </div>
  )
}

export default Template;

/*const pageDate = graphql`
  query JulesPageQuery{
    allSitePage {
      nodes {
        id
      }
    }
  }
`*/