import React from 'react';
import { graphql } from 'gatsby';
import { Navigation } from "../components/navigation.js";

function RootIndex(props){
  return (
    <div>
      <Navigation></Navigation>
    </div>
  )
}

export default RootIndex

