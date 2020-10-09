import React from 'react'
import { graphql } from 'gatsby'

function Template({pageContext}){
  
  const imgWidth = pageContext.playerImage.file.details.image.width / 3;
  const imgHeight = pageContext.playerImage.file.details.image.height / 3;
  return(
    <>
        <h1>{pageContext.playerName}</h1>
        <img alt={pageContext.description} 
          src={pageContext.playerImage.file.url} 
          width={imgWidth}
          height={imgHeight}/>
        <p>Birthday: {pageContext.birthday}</p>
        <p>Nationality: {pageContext.nationality}</p>
        <p>Favorite Characters: {pageContext.favoritesCharacter}</p>
    </>
  )
}

export default Template;