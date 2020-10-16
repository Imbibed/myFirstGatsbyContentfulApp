import React from "react";
import { ThemePartialProvider } from "mailjet-react-components";
import theme from './src/theme';
import MailjetNavigation from './src/components/MailjetNavigation';
import Footer from "./src/components/Footer";

export const wrapPageElement = ({ element }) => 
<ThemePartialProvider theme={theme} loadFonts={false}>
  <MailjetNavigation>
    {element}
  </MailjetNavigation>
  <Footer />
</ThemePartialProvider>
