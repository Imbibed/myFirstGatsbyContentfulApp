import React from "react";
import Navigation from "./src/components/Navigation";

export const wrapPageElement = ({children}) => <Navigation>
  {children}
</Navigation>