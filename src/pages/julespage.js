import React, {useState, useEffect} from 'react'
import { Link, graphql } from 'gatsby'
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import { map } from 'lodash'

const JulesPage = (props) => { 
  //console.log(props.data.allContentfulPlayerPage);

  const [count, setCount] = useState(0)

  useEffect(() => {
    //console.log("Init JulesPage");
    return () => {
      //console.log("Remove component from the page");
    }
  }, [])  //  called one time when component loaded, return function will be called when page change (remove component)

  useEffect(() => {
    //console.log("Increment done");
  }, [count]) //  called every times where count change
    
  const MainTitle = styled.h1`
    text-align:center;
  `;

  const meleePlayerList = map(props.data.allContentfulPlayerPage.edges, edge => 
    <li key={edge.node.id}>
      <Link to={'/'+edge.node.playerName+'-detailpage/'}>{edge.node.playerName}</Link>
    </li>
  );
  return (
    <>
      <MainTitle>Welcome to Jules page</MainTitle>
      <h2>Above, the SSBM best player in the world.</h2>
      <ul>
        {meleePlayerList}
      </ul>
      <h3>
        {count}
      </h3>
      <button onClick={() => setCount(count+1)}>Increment</button>
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