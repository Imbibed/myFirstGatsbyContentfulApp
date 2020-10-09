import React from 'react';
import { Container404 } from "../styles/index";
import { Image, Header2, Header3 } from 'mailjet-react-components';

const page404 = (props) => {
  const alt = props.data.contentfulImage.alt;
  const image = props.data.contentfulImage.image.file;
  return(
    <>
      <Container404>
        <Header2>404</Header2>
        <Header3>Ce n'est pas la page que vous cherchez</Header3>
        <Image src={image.url} alt={alt} height={image.details.image.height} width={image.details.image.width}/>
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
          details {
            image {
              height
              width
            }
          }
        }
      }
      alt
    }
  }
`