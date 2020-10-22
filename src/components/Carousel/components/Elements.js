import React, { useContext, useEffect, useState } from 'react';
import { Div } from 'mailjet-react-components';
import { map } from 'lodash';

import { CarouselContext } from './CarouselContext';
import DisplayNoneElement from '../styles/DisplayNoneElement';
import FirstDivCarousel from '../styles/FirstDivCarousel';

function Elements({children}) {
  const { activeIndex } = useContext(CarouselContext);

  return (
    <FirstDivCarousel di="f" jc="ce">
      {map(children, (element, index) => 
        activeIndex.includes(index) ? 
          element : 
          <DisplayNoneElement>{element}</DisplayNoneElement>
      )}
    </FirstDivCarousel>
  )
}

export default Elements;