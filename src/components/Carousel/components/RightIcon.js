import React, { useContext } from 'react';
import { Div } from 'mailjet-react-components';

import { CarouselContext } from './CarouselContext'

function RightIcon ({children}) {
  const { handleRightClick } = useContext(CarouselContext)
  return (
    <Div pl="s12">
      <i style={{cursor: 'pointer'}} onClick={handleRightClick}>{children}</i>
    </Div>
  )
}

export default RightIcon;