import React, { useContext } from 'react';
import { Div } from 'mailjet-react-components';

import { CarouselContext } from './CarouselContext'

function LeftIcon({children}) {
  const { handleLeftClick } = useContext(CarouselContext);

  return (
    <Div pr="s12">
      <i style={{cursor: 'pointer'}} onClick={handleLeftClick}>{children}</i>
    </Div>
  )
}

export default LeftIcon;