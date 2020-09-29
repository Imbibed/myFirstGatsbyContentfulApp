const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          // Remove when module fix is on mailjet-react-compononents develop branch
          'mailjet-react-components': path.resolve(
            __dirname,
            './node_modules/mailjet-react-components/build'
          ),
          'mailjet-react-components/icons': path.resolve(
            __dirname,
            './node_modules/mailjet-react-components/build/icons'
          ),
          react: path.join(__dirname, './node_modules/react'),
          'react-dom': path.join(__dirname, './node_modules/react-dom'),
          'styled-components': path.join(
            __dirname,
            './node_modules/styled-components'
          ),
        },
      },
    },
  ],
}
