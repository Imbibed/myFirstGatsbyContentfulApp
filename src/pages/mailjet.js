import React, {useState, useEffect} from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash'
import MailjetNavigation from '../components/MailjetNavigation'

const mailjet = (props) => {
  const mailjetLogo = props.data.allContentfulMailjetLogo.edges[0];
  //console.log(mailjetLogo.href);
  //console.log(mailjetLogo.node.logo);
  return(
    <>
      <MailjetNavigation 
        goTo={mailjetLogo.node.href} 
        pictureUrl={mailjetLogo.node.logo.file.url}
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
  }
`