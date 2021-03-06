import React, {useState, useEffect} from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash'
import { injectIntl } from "gatsby-plugin-intl"

const MainTitle = styled.h1`
  text-align:center;
`;

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

  const meleePlayerList = map(props.data.allContentfulPlayerPage.edges, edge => 
    <li key={edge.node.id}>
      <Link to={'/'+edge.node.playerName+'-detailpage/'}>{edge.node.playerName}</Link>
    </li>
  );
  
  return (
    <>
      <MainTitle>{props.intl.formatMessage({id: "julespage_title"})}</MainTitle>
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

export default injectIntl(JulesPage);

//  param doesn't work because it has too be 
//  send by the context provided by createPage function
export const pageQuery = graphql`
  query MyQuery {
    allContentfulPlayerPage {
      edges {
        node {
          playerName
          id
          node_locale
        }
      }
    }
  }
`