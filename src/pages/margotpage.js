import { graphql, Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'

const DataCell = styled.td`
  text-align: center;
  border: 1px solid rgb(190, 190, 190);
  padding: 10px;
`
const Table = styled.table`
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
`
const TitleCell = styled.th`
  text-align: center;
  border: 1px solid rgb(190, 190, 190);
  padding: 10px;
  background-color: #696969;
  color: #fff;
`
const LinkStyled = styled(Link)`
  color: blue;
`

function MargotPage(props) {
  const pastries = props.data.allContentfulBakery.edges;

  return (
    <Navigation>
      <h2>La page de Margot !</h2>
      <Table>
        <thead>
          <tr key="head">
            <TitleCell scope="col">Name</TitleCell>
            <TitleCell scope="col">Ingredients</TitleCell>
            <TitleCell scope="col">Nationality</TitleCell>
            <TitleCell scope="col">Temperature</TitleCell>
            <TitleCell scope="col">Picture</TitleCell>
          </tr>
        </thead>
        <tbody>
          {pastries.map((pastry) =>
            <tr key={pastry.node.id}>
              <DataCell scope="row">
                <LinkStyled to={'/'+ pastry.node.id}>{pastry.node.bakeryName}</LinkStyled>
              </DataCell>
              <DataCell scope="row">{pastry.node.ingredients.map((ingredient) => ingredient + ' ')}</DataCell>
              <DataCell scope="row">{pastry.node.nationality}</DataCell>
              <DataCell scope="row">{pastry.node.isCold ? "Cold" : "Warm"}</DataCell>
              <DataCell scope="row">
                <img src={pastry.node.picture.file.url} alt={pastry.node.picture.file.fileName} height="100px" width="150px"/>
              </DataCell>
            </tr>
          )}
        </tbody>
      </Table>
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