import React from 'react'
import Navigation from '../components/Navigation'

function MargotTemplate({ pageContext }) {
  return (
    <Navigation>
      <h2>{pageContext.bakeryName}</h2>
      <h4>General information : </h4>
      <img src={pageContext.picture.file.url} alt={pageContext.picture.file.fileName} />
      <p>Nationality : {pageContext.nationality}</p>
      <p>Temperature : {pageContext.isCold ? "Cold" : "Warm"}</p>
      <p>Ingredients : </p>
      <ul>
        {pageContext.ingredients.map((ingredient) => 
        <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </Navigation>
  )
}

export default MargotTemplate;
