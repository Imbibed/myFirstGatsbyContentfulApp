import React from "react";
import { ThemePartialProvider } from "mailjet-react-components";
import theme from './src/theme';
import MailjetNavigation from './src/components/MailjetNavigation';
import Footer from "./src/components/Footer";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>