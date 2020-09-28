import React from "react";
import Navigation from "./src/components/Navigation";
import { ThemeProvider } from "styled-components";
import theme from './src/theme'
import { mailjet, ThemePartialProvider } from "mailjet-react-components";

export const wrapPageElement = ({element}) => <ThemePartialProvider theme={mailjet} otherTheme={theme} loadFonts={false}>
  <Navigation>
    {element}
  </Navigation>
</ThemePartialProvider>

const BodyComponents = [
  <body style={{margin:0}}></body>
]

export const onRenderBody = ({setPreBodyComponents}) => {
  setPreBodyComponents(BodyComponents);
}
