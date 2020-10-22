import React from 'react';
import { Container404 } from "../styles/index";
import { Image, Header2, Header3 } from 'mailjet-react-components';

const page404 = ({data: {contentfulImage}}) => {
  const alt = contentfulImage.alt;
  const image = contentfulImage.image;
  return (
    <Container404>
      <Header2>404</Header2>
      <Header3>Ce n'est pas la page que vous cherchez</Header3>
      <Image src={image.fluid.src} alt={alt} height={image.file.details.image.height} width={image.file.details.image.width}/>
    </Container404>
  )
}

export default page404;

export const pageQuery = graphql`
  query Page404Query {
    contentfulImage(name: {eq: "StarWars"}) {
      image {
        fluid(toFormat: WEBP) {
          src
        }
        file {
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