import React from "react";
import theme from './src/theme'
import { mailjet, ThemePartialProvider } from "mailjet-react-components";
import Navigation from './src/components/Navigation'

export const wrapPageElement = ({ element }) => <ThemePartialProvider theme={mailjet} otherTheme={theme} loadFonts={false}>
  <Navigation>
    {element}
  </Navigation>
</ThemePartialProvider>
