import Navigation from "./src/components/Navigation";
import React from "react";

export const wrapPageElement = ({element}) => <Navigation>
  {element}
</Navigation>