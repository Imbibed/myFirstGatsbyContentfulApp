const path = require('path');

exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allContentfulPlayerPage(filter: {node_locale: {eq: "en-US"}}) {
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
                details {
                  image {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
      allContentfulBakery(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            id
            bakeryName
            ingredients
            nationality
            isCold
            picture {
              file {
                url
                fileName
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

  // Create pages of bakery
  result.data.allContentfulBakery.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve('./src/templates/margottemplate.js'),
      context: {
        bakeryName: node.bakeryName,
        ingredients: node.ingredients,
        nationality: node.nationality,
        isCold: node.isCold,
        picture: node.picture,
      },
    })
  })


}