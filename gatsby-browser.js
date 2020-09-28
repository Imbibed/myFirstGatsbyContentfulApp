import Navigation from "./src/components/Navigation";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from './src/theme'
import "./src/styles/global.css"

export const wrapPageElement = ({ element }) => <ThemeProvider theme={theme}>
  <Navigation>
    {element}
  </Navigation>
</ThemeProvider>