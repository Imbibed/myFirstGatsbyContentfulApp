const { create } = require('lodash');
const path = require('path');

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
  console.log(page.context.intl);
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
    query MyQuery {
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
      allContentfulBakery(filter: {node_locale: {eq: "en-US"}}) {
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
        bakeryName: node.bakeryName,
        ingredients: node.ingredients,
        nationality: node.nationality,
        isCold: node.isCold,
        picture: node.picture,
      },
    })
  })
  
  result.data.allContentfulAnimalsGlobal.edges.forEach(({node}) => {
    console.log("création page animal: " + node.animalLocal.node_locale);

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