import React from 'react'
import { Link } from 'gatsby'
import Navigation from '../components/navigation'

function JulesPage(props){
    console.log(props.data.allContentfulPlayerPage);
    const data = props.data;
    const meleePlayerList = props.data.allContentfulPlayerPage.edges.map((edge) => 
      <li key={edge.node.playerName}>{edge.node.playerName}</li>
    );
  return (
    <div>
      <Navigation>
        <p>Welcome to Jules page</p>
      </Navigation>
      <h1>Above, the SSBM best player in the world.</h1>
      <ul>
        {meleePlayerList}
      </ul>
    </div>
  )
}

export default JulesPage;

export const pageQuery = graphql`
  query MyQuery {
    allContentfulPlayerPage {
      edges {
        node {
          playerName
        }
      }
    }
  }
`