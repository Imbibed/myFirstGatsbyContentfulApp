const path = require('path');

//  This variable have to be equivalent to gatsby-plugin-intl config 
//  in gatsby-config.js file
const LangMapping = {
  fr: 'fr',
  en: 'en-US'
}

const getISOLang = (intlLang) => {
  if(intlLang === 'en'){
    return LangMapping.en
  }else if(intlLang === 'fr'){
    return LangMapping.fr
  }
}

exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;
  deletePage(page);
  
    createPage({
      ...page,
      context: {
        ...page.context,
        lang: getISOLang(page.context.intl.language),
      },
    })
  
}

exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery($locale: String) {
      allContentfulPlayerPage {
        edges {
          node {
            playerName
            birthDay(formatString: "Do MMMM YYYY")
            nationality
            favoritesCharacter
            node_locale
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
      allContentfulBakery(filter: {node_locale: {eq: $locale}}) {
        edges {
          node {
            id
            bakeryName
            ingredients
            nationality
            isCold
            picture {
              image {
                file {
                  url
                }
              }
              alt
            }
          }
        }
      }
      allContentfulAnimalsGlobal {
        edges {
          node {
            name
            animalLocal {
              name
              description
              node_locale
            }
          }
        }
      }
      allContentfulTranslatedGroup(filter: {label: {eq: "HomePagesGroup"}}) {
        edges {
          node {
            label
            node_locale
            translatedObject {
              ... on ContentfulPage {
                id
                seoTitle
                seoDescription
                slug
                body {
                  label
                  pageTitle
                  references {
                    name
                    title
                    text {
                      content {
                        content {
                          value
                        }
                      }
                    }
                  }
                }
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

  result.data.allContentfulTranslatedGroup.edges.forEach(({node}) => {
    
    createPage({
      path: "/" + node.translatedObject.slug,
      component: path.resolve(`src/templates/homeTemplate.js`),
      context: {
        contentfulLang: node.node_locale,
        data: node.translatedObject
      }
    })
  })

  result.data.allContentfulPlayerPage.edges.forEach(({ node }) => {
    createPage({
      path: '/'+ node.playerName+'-detailpage' +'/',
      component: path.resolve(`src/templates/template.js`),
      context: {
        playerName: node.playerName,
        birthday: node.birthDay,
        nationality: node.nationality,
        favoritesCharacter: node.favoritesCharacter,
        playerImage: node.playerImage,
        local: node.node_locale
      },
    })
  })

  // Create pages of bakery
  result.data.allContentfulBakery.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve('./src/templates/margottemplate.js'),
      context: {
        ...node,
        locale: "en-US"
      },
    })
  })
  
  result.data.allContentfulAnimalsGlobal.edges.forEach(({node}) => {
    createPage({
      path: node.name+'-page',
      component: path.resolve('./src/templates/animalsTemplate.js'),
      context: {
        animalName: node.animalLocal.name,
        animalDescription: node.animalLocal.description,
        lang: node.animalLocal.node_locale
      }
    })
  })


}