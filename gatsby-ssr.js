import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>

const BodyComponents = [
  <body style={{margin:0}}></body>
]

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(BodyComponents);
}