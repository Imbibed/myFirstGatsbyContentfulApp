import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash'
import AlbumSticker from '../components/AlbumSticker/index'

const AlbumsContainer = styled.section`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  margin:5%;
`;

const MainTitle = styled.h1`
  text-align:center;
`;

const BlogIndex = (props) => {
  //console.log(props.data.allContentfulAnimalsGlobal.edges);
  console.log(props);

  const content = map(props.data.allContentfulAnimalsGlobal.edges, edge => 
    <div key={edge.node.id}>
      <p>{edge.node.node_locale}</p>  
      <Link to={'/'+edge.node.animalLocal.name+'-page'}>link</Link>
    </div>
  )
  return(
    <>
      <MainTitle>Here albums photo</MainTitle>
      <AlbumsContainer>
        {content}
      </AlbumsContainer>
    </>
  )
}
  
export default BlogIndex

export const pageQuery = graphql`
  query AlbumsQuery($lang: String) {
    allContentfulAnimalsGlobal(filter: { node_locale: { eq: $lang } }) {
      edges {
        node {
          id
          node_locale
          animalLocal {
            id
            name
            description
          }
        }
      }
    }
  }
`