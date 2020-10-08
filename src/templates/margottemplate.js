import React from 'react'

function MargotTemplate({ pageContext }) {
  return (
    <>
      <h2>{pageContext.bakeryName}</h2>
      <h4>General information : </h4>
      <img src={pageContext.picture.image.file.url} alt={pageContext.picture.image.file.fileName} />
      <p>Nationality : {pageContext.nationality}</p>
      <p>Temperature : {pageContext.isCold ? "Cold" : "Warm"}</p>
      <p>Ingredients : </p>
      <ul>
        {pageContext.ingredients.map((ingredient) => 
        <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </>
  )
}

export default MargotTemplate;
