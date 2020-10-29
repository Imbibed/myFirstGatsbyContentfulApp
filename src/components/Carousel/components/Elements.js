import React, { useContext } from 'react';
import { map } from 'lodash';

import { CarouselContext } from './CarouselContext';
import DisplayNoneElement from '../styles/DisplayNoneElement';
import DisplayActiveElement from '../styles/DisplayActiveElement';
import FirstDivCarousel from '../styles/FirstDivCarousel';

function Elements({children}) {
  const { activeIndex, displayedIndex } = useContext(CarouselContext);

  return (
    <FirstDivCarousel di="f" jc="ce">
      {map(displayedIndex, (element) => 
          activeIndex.includes(element) ?
          <DisplayActiveElement>{children[element]}</DisplayActiveElement> : <DisplayNoneElement>{children[element]}</DisplayNoneElement>
      )}
    </FirstDivCarousel>
  )
}

export default Elements;