import React, {useState, useEffect} from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash'
import MailjetNavigation from '../components/MailjetNavigation'

const mailjet = (props) => {
  const mailjetLogo = props.data.allContentfulMailjetLogo.edges[0];
  const leftSideContent = props.data.allContentfulNavbarLeftPart.edges[0].node.content;
  
  return(
    <>
      <MailjetNavigation 
        goTo={mailjetLogo.node.href} 
        pictureUrl={mailjetLogo.node.logo.file.url}
        leftSideContent={leftSideContent}
        intl={props.pageContext.intl}
      />
    </>
  )
}

export default mailjet;

export const pageQuery = graphql`
  query MyMailjetNavigationQuery($lang: String) {
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
    allContentfulNavbarLeftPart(filter: { node_locale: { eq: $lang } }) {
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