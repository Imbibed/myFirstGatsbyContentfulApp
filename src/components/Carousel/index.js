import React, { useEffect, useState } from 'react';
import { Div } from 'mailjet-react-components';
import { map } from 'lodash';

import { CarouselContext } from './components/CarouselContext';
import LeftIcon from './components/LetfIcon';
import RightIcon from './components/RightIcon';
import Elements from './components/Elements';
import Element from './components/Element';


function Carousel({elementDisplay, children}) {
  const [activeIndex, setActiveIndex] = useState([0]);
  const numberOfElement = children[1].props.children.length;

  useEffect(() => {
    let index = [];
    for (let i = 1; i < elementDisplay; ++i) {
      index.push(i);
    }
    setActiveIndex(activeIndex.concat(index));
  }, []);

  function handleLeftClick() {
    let newActiveIndex = map(activeIndex, (element) => 
      element === 0 ? (numberOfElement - 1) : (element - 1)
    );
    setActiveIndex(newActiveIndex);
  }
  function handleRightClick() {
    let newActiveIndex = map(activeIndex, (element) => 
      element === numberOfElement - 1 ? (0) : (element + 1)
    );
    setActiveIndex(newActiveIndex);
  }

  return (
    <CarouselContext.Provider value={{ handleLeftClick, handleRightClick, activeIndex }}>
      <Div di="f" jc="ce" ai="ce">
        {children}
      </Div>
    </CarouselContext.Provider>
  )
}

Carousel.LeftIcon = LeftIcon;
Carousel.RightIcon = RightIcon;
Carousel.Elements = Elements;
Carousel.Element = Element;
export default Carousel;
