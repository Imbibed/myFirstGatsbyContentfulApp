import React from 'react'
import { Link } from 'gatsby'
import Navigation from '../components/navigation'

function JulesPage(props){
    console.log(props.data.allContentfulPlayerPage);
    const data = props.data;
    let i = 0;
    const meleePlayerList = props.data.allContentfulPlayerPage.edges.map((edge) => 
      <li key={edge.node.id}><Link to={'/'+edge.node.playerName+'-detailpage/'}>{edge.node.playerName}</Link></li>
    );
  return (
    <div>
      <Navigation>
        <h1>Welcome to Jules page</h1>
        <h2>Above, the SSBM best player in the world.</h2>
        <ul>
          {meleePlayerList}
        </ul>
      </Navigation>
    </div>
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