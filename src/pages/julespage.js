import React from 'react'
import { Link, graphql } from 'gatsby'

/*class JulesPage extends React.Component {
  render() {
    const textContent = get(this, 'props.data.contentfulSimpleText.textContent')
    const numberContent = get(this, 'props.data.contentfulSimpleText.numberContent')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div>JulesPage</div>
          <div></div>
        </div>
      </Layout>
    )
  }
}*/

function JulesPage(props){
  const text = props.data.contentfulSimpleText.textContent;
  const number = props.data.contentfulSimpleText.numberContent;
  return (
    <div>JulesPage</div>
  )
}

export default JulesPage

export const pageQuery = graphql`
  query JulesPageQuery{
    contentfulSimpleText {
      textContent
      numberContent
    }
  }
`