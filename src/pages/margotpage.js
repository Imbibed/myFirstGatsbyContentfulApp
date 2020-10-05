import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

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

function MargotPage(props) {
  const pastries = props.data.allContentfulBakery.edges;

  return (
    <>
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
          {map(pastries, ({node: {id, bakeryName, ingredients, nationality, isCold, picture}}) =>
            <tr key={id}>
              <DataCell scope="row">
                <Link to={'/'+ id}>{bakeryName}</Link>
              </DataCell>
              <DataCell scope="row">{ingredients.map((ingredient) => ingredient + ' ')}</DataCell>
              <DataCell scope="row">{nationality}</DataCell>
              <DataCell scope="row">{isCold ? "Cold" : "Warm"}</DataCell>
              <DataCell scope="row">
                <img src={picture.image.file.url} alt={picture.image.alt} height="100px" width="150px"/>
              </DataCell>
            </tr>
          )}
        </tbody>
      </Table>
    </>
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
          image {
            file {
              url
            }
          }
          alt
        }
      }
    }
  }
}
`