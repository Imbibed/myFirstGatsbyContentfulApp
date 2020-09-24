import { graphql } from 'gatsby';
import React from 'react'
import Navigation from '../components/Navigation'
import { Table, LinkStyled, TitleCell, Line, DataCell } from '../styles'

function MargotPage(props) {
  const pastries = props.data.allContentfulBakery.edges;

  return (
    <Navigation>
      <h2>La page de Margot !</h2>
      <Table>
        <thead>
          <Line key="head">
            <TitleCell scope="col">Name</TitleCell>
            <TitleCell scope="col">Ingredients</TitleCell>
            <TitleCell scope="col">Nationality</TitleCell>
            <TitleCell scope="col">Temperature</TitleCell>
            <TitleCell scope="col">Picture</TitleCell>
          </Line>
        </thead>
        <tbody>
          {pastries.map((pastry) =>
            <Line key={pastry.node.id}>
              <td as={DataCell} scope="row">
                <LinkStyled to={'/'+ pastry.node.id}>{pastry.node.bakeryName}</LinkStyled>
              </td>
              <DataCell grey scope="row">{pastry.node.ingredients.map((ingredient) => ingredient + ' ')}</DataCell>
              <DataCell scope="row" fontStyle="italic">{pastry.node.nationality}</DataCell>
              <DataCell grey scope="row">{pastry.node.isCold ? "Cold" : "Warm"}</DataCell>
              <DataCell scope="row">
                <img src={pastry.node.picture.file.url} alt={pastry.node.picture.file.fileName} height="100px" width="150px"/>
              </DataCell>
            </Line>
          )}
        </tbody>
      </Table>
      <h2>Et en bonus !</h2>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4pkhEyRoidk" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen  />
      </div>
    </Navigation>
  )
}

export default MargotPage;

export const query = graphql`
query MargotQuery {
  allContentfulBakery(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        id
        bakeryName
        ingredients
        nationality
        isCold
        picture {
          file {
            url
            fileName
          }
        }
      }
    }
  }
}
`