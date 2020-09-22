const path = require('path');

exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allContentfulPlayerPage {
        edges {
          node {
            playerName
            contentful_id
          }
        }
      }
    }
  `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const meleePlayerDetailsTemplate = path.resolve(`src/templates/template.js`)
  
  result.data.allContentfulPlayerPage.edges.forEach(({ node }) => {
    const path = node.playerName+'-detailpage';
    createPage({
      path: '/'+path+'/',
      component: meleePlayerDetailsTemplate,
      context: {
        contentfulId: node.contentful_id,
        playerName: node.playerName
      },
    })
  })
}