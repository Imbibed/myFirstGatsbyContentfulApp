import React from 'react'
import { Link } from 'gatsby'
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import{ map } from 'lodash'

const JulesPage = (props) => { 
  //console.log(props.data.allContentfulPlayerPage);
    
  const MainTitle = styled.h1`
    text-align:center;
  `;

  const meleePlayerList = map(props.data.allContentfulPlayerPage.edges, edge => {
    <li key={edge.node.id}>
      <Link to={'/'+edge.node.playerName+'-detailpage/'}>{edge.node.playerName}</Link>
    </li>
  });

  return (
    <>
      <MainTitle>Welcome to Jules page</MainTitle>
      <h2>Above, the SSBM best player in the world.</h2>
      <ul>
        {meleePlayerList}
      </ul>
    </>
  )
}

export default JulesPage;

export const pageQuery = graphql`
  query MyQuery {
    allContentfulPlayerPage {
      edges {
        node {
          id
          playerName
        }
      }
    }
  }
`