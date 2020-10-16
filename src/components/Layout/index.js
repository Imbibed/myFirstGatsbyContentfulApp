/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {ThemePartialProvider} from "mailjet-react-components";
import {RawIntlProvider} from "gatsby-plugin-intl";

import Navbar from "../MailjetNavigation"
import theme from '../../theme'
import Footer from "../Footer";

const Layout = ({children, pageContext }) => {
  // Get intl state from pageContext
  const {intl} = pageContext

  return (
    <ThemePartialProvider theme={theme} loadFonts={false}>
      <RawIntlProvider value={intl}>
      <Navbar/>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
      </RawIntlProvider>
    </ThemePartialProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
