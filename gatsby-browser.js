import Navigation from "./src/components/Navigation";
import React from "react";
import theme from './src/theme'
import "./src/styles/global.css"
import { mailjet, ThemePartialProvider } from "mailjet-react-components";

export const wrapPageElement = ({ element }) => <ThemePartialProvider theme={mailjet} otherTheme={theme} loadFonts={false}>
  <Navigation>
    {element}
  </Navigation>
</ThemePartialProvider>