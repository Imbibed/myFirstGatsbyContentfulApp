import React, {useState, useEffect} from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash'
import MailjetNavigation from '../components/MailjetNavigation'

const mailjet = (props) => {
  const mailjetLogo = props.data.allContentfulMailjetLogo.edges[0];
  const leftSideContent = props.data.allContentfulNavbarLeftPart.edges[0].node.content;
  //console.log(leftSideContent);
  return(
    <>
      <MailjetNavigation 
        goTo={mailjetLogo.node.href} 
        pictureUrl={mailjetLogo.node.logo.file.url}
        leftSideContent={leftSideContent}
      />
    </>
  )
}

export default mailjet;

export const pageQuery = graphql`
  query MyMailjetNavigationQuery {
    allContentfulMailjetLogo {
      edges {
        node {
          href
          logo {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulNavbarLeftPart {
      edges {
        node {
          label
          content {
            ... on ContentfulNavBarButton {
              id
              label
              path
            }
            ... on ContentfulNavBarDropDown {
              id
              label
              buttons {
                ... on ContentfulNavBarButton {
                  id
                  label
                  path
                }
              }
            }
          }
        }
      }
    }
  }
`