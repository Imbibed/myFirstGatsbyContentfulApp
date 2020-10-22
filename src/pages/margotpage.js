import React from 'react';
import { graphql, Link } from 'gatsby';
import { map } from 'lodash';
import { Image } from 'mailjet-react-components';
import { ChevronLeft, ChevronRight } from 'mailjet-react-components/icons';
import { useIntl } from "gatsby-plugin-intl";

import { DataCell, Table, TitleCell } from "../styles/index";
import Carousel from "../components/Carousel";

const MargotPage = ({data}) => {
  const pastries = data.allContentfulBakery.edges;
  const intl = useIntl();

  return (
    <>
      <h2>{intl.formatMessage({id: "margotpage_title"})}</h2>
      <Carousel elementDisplay={2}>
        <Carousel.LeftIcon>
          <ChevronLeft />
        </Carousel.LeftIcon>
        <Carousel.Elements>
          {map(pastries, ({node: {picture}}) =>
            <Carousel.Element key={picture.image.id}>
              <Image src={picture.image.fluid.src} alt={picture.alt} key={picture.image.id} height="200px" width="250px"/>
            </Carousel.Element>
          )}
        </Carousel.Elements>
        <Carousel.RightIcon>
          <ChevronRight />
        </Carousel.RightIcon>
      </Carousel>
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
                <Image src={picture.image.fluid.src} alt={picture.alt} height="100px" width="150px"/>
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
            fluid(toFormat: WEBP) {
              src
            }
            id
          }
          alt
        }
      }
    }
  }
}
`
