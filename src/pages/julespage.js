import React from 'react'
import { Link, graphql } from 'gatsby'

function JulesPage(props){
  const text = props.data.contentfulSimpleText.textContent;
  const number = props.data.contentfulSimpleText.numberContent;
  return (
    <div>JulesPage</div>
  )
}

export default JulesPage

export const pageQuery = graphql`
  query JulesPageQuery{
    contentfulSimpleText {
      textContent
      numberContent
    }
  }
`