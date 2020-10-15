import React from "react";
import { ThemePartialProvider } from "mailjet-react-components";
import theme from './src/theme';
import Navigation from './src/components/Navigation';
import Footer from "./src/components/Footer";

export const wrapPageElement = ({ element }) => 
<ThemePartialProvider theme={theme} loadFonts={false}>
  <Navigation>
    {element}
  </Navigation>
  <Footer />
</ThemePartialProvider>
