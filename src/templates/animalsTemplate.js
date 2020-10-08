import React from 'react'
import { graphql } from 'gatsby'

const AnimalsTemplate = (props) => {

  //console.log(props.pageContext);

  return(
    <>
      <p>animal:</p>
      <p>{props.pageContext.animalName}</p>
      <p>{props.pageContext.animalDescription}</p>
    </>
  )
}

export default AnimalsTemplate;