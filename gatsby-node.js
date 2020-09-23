const path = require('path');

exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allContentfulPlayerPage {
        edges {
          node {
            playerName
            birthDay(formatString: "Do MMMM YYYY")
            nationality
            favoritesCharacter
            playerImage {
              title
              description
              file {
                url
              }
            }
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
        playerName: node.playerName,
        birthday: node.birthDay,
        nationality: node.nationality,
        favoritesCharacter: node.favoritesCharacter,
        playerImage: node.playerImage
      },
    })
  })
}