import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation'

function Template({pageContext}){
  console.log(pageContext.playerImage);
  const imgWidth = pageContext.playerImage.file.details.image.width / 3;
  const imgHeight = pageContext.playerImage.file.details.image.height / 3;
  return(
    <div>
      <Navigation>
        <h1>{pageContext.playerName}</h1>
        <img alt={pageContext.description} 
          src={pageContext.playerImage.file.url} 
          width={imgWidth}
          height={imgHeight}/>
        <p>Birthday: {pageContext.birthday}</p>
        <p>Nationality: {pageContext.nationality}</p>
        <p>Favorite Characters: {pageContext.favoritesCharacter}</p>
      </Navigation>
    </div>
  )
}

export default Template;