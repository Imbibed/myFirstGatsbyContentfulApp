import React from "react";
import Navigation from "./src/components/Navigation";
import theme from './src/theme'
import { mailjet, ThemePartialProvider } from "mailjet-react-components";

export const wrapPageElement = ({element}) => {
  //console.log(props.allContentfulMailjetLogo);
  return(
    <ThemePartialProvider theme={mailjet} otherTheme={theme} loadFonts={false}>
      <MailjetNavbar>
        {element}
      </MailjetNavbar>
    </ThemePartialProvider>
  )
}

const BodyComponents = [
  <body style={{margin:0}}></body>
]

export const onRenderBody = ({setPreBodyComponents}) => {
  setPreBodyComponents(BodyComponents);
}

