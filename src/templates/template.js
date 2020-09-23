import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'

function Template({pageContext}){
  console.log(pageContext.playerImage);
  return(
    <div>
      <Navigation>
        <h1>{pageContext.playerName}</h1>
        <img alt={pageContext.description}/>
        <p>Birthday: {pageContext.birthday}</p>
        <p>Nationality: {pageContext.nationality}</p>
        <p>Favorite Characters: {pageContext.favoritesCharacter}</p>
      </Navigation>
    </div>
  )
}

export default Template;