import React from "react";
import theme from './src/theme'
import { mailjet, ThemePartialProvider } from "mailjet-react-components";
import Navigation from './src/components/Navigation'
import MailjetNavbar from './src/components/MailjetNavigation'

export const wrapPageElement = ({ element }) => {
  
  return(
    <ThemePartialProvider theme={mailjet} otherTheme={theme} loadFonts={false}>
      <MailjetNavbar>
        {element}
      </MailjetNavbar>
    </ThemePartialProvider>
  )
}

