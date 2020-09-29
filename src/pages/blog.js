import React from 'react'
import { Link, graphql } from 'gatsby'
import Navigation from '../components/Navigation/index'
import styled from 'styled-components'
import { map } from 'lodash'
import AlbumSticker from '../components/AlbumSticker/index'

const AlbumsContainer = styled.section`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  margin:5%;
  border: solid;
`;

const MainTitle = styled.h1`
  text-align:center;
`;

const BlogIndex = (props) => {
  console.log(props.data);

  const albumsList = map(props.data.allContentfulAlbum.edges, edges => {
    let i = 0;

    return(
      <AlbumSticker 
      key={edges.node.id} 
      name={edges.node.albumName} 
      imageUrl=""
    />
    )
  }
    
  );

  return(
    <section>
      <MainTitle>Here albums photo</MainTitle>
      <AlbumsContainer>
        {albumsList}
      </AlbumsContainer>
    </section>
  )
}
  
export default BlogIndex

export const pageQuery = graphql`
  query AlbumsQuery {
    allContentfulAlbum {
      edges {
        node {
          id
          photos {
            file {
              url
            }
          }
          albumName
          startDate(formatString: "MMMM YYYY")
          endDate(formatString: "MMMM YYYY")
          description
          albumLocation {
            lon
            lat
          }
        }
      }
    }
  }
`