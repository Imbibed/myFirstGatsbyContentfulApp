import React from 'react';
import { Container404 } from "../components/Page404/styles/Container404"

const page404 = (props) => {
  const image = props.data.contentfulImage;
  return(
    <>
      <Container404>
        <h2>404</h2>
        <h3>Ce n'est pas la page que vous cherchez</h3>
        <img src={image.image.file.url} alt={image.alt} />
      </Container404>
    </>
  )
}

export default page404;

export const pageQuery = graphql`
  query Page404Query {
    contentfulImage(name: {eq: "StarWars"}) {
      image {
        file {
          url
        }
      }
      alt
    }
  }
`