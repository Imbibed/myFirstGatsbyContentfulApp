import React from "react";
import Layout from "./src/components/Layout";
import { navigate } from "gatsby"

export const wrapPageElement = ({ element, props }) => {
  console.log(props);
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}

export const onPreRouteUpdate = (arg) => {
  //console.log(arg);
  //console.log(navigator.userLanguage);
  //console.log(navigator.language);
  const location = arg.location;
  const prevLocation = arg.prevLocation;
  //console.log("Gatsby started to change location to", location.pathname)
  //console.log("Gatsby started to change location from", prevLocation ? prevLocation.pathname : null)
  //navigate("/");
}

const i18nPathMappingTable = {

}