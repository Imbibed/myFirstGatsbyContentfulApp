import { graphql } from 'gatsby';
import React from 'react';
import { Table, LinkStyled, TitleCell, Line, DataCell } from '../styles';
import { map } from 'lodash';

function MargotPage(props) {
  const pastries = props.data.allContentfulBakery.edges;

  return (
    <>
      <h2>La page de Margot !</h2>
      <Table>
        <thead>
          <Line>
            <TitleCell scope="col">Name</TitleCell>
            <TitleCell scope="col">Ingredients</TitleCell>
            <TitleCell scope="col">Nationality</TitleCell>
            <TitleCell scope="col">Temperature</TitleCell>
            <TitleCell scope="col">Picture</TitleCell>
          </Line>
        </thead>
        <tbody>
          {map(pastries, ({node: {id, bakeryName, ingredients, nationality, isCold, picture}}) =>
            <Line key={id}>
              <td as={DataCell} scope="row">
                <LinkStyled to={'/'+ id}>{bakeryName}</LinkStyled>
              </td>
              <DataCell grey scope="row">{ingredients.map((ingredient) => ingredient + ' ')}</DataCell>
              <DataCell scope="row" fontStyle="italic">{nationality}</DataCell>
              <DataCell grey scope="row">{isCold ? "Cold" : "Warm"}</DataCell>
              <DataCell scope="row">
                <img src={picture.file.url} alt={picture.file.fileName} height="100px" width="150px"/>
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