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
  const lastElement = children[1].props.children.length - 1;
  const [displayedIndex, setDisplayedIndex] = useState([lastElement]);

  // Init carousel
  useEffect(() => {
    let index = [];
    for (let i = 1; i < elementDisplay; ++i) {
      index.push(i);
    }
    setActiveIndex(activeIndex.concat(index));
    let newDisplayedIndex = [0].concat(index);
    let lastActiveIndex = index[index.length - 1];
    if (lastActiveIndex === lastElement) {
      newDisplayedIndex.push(0);
    } else {
      newDisplayedIndex.push(lastActiveIndex + 1);
    }
    setDisplayedIndex(displayedIndex.concat(newDisplayedIndex));
  }, []);

  // Calculate the DisplayedIndex
  function calculateDisplayedIndex(newActiveIndex) {
    let newDisplayedIndex = [];
    if (newActiveIndex[0] === 0) {
      newDisplayedIndex.push(lastElement);
    } else {
      newDisplayedIndex.push(newActiveIndex[0] - 1);
    }
    newDisplayedIndex = newDisplayedIndex.concat(newActiveIndex);
    if (newActiveIndex[1] === lastElement) {
      newDisplayedIndex.push(0);
    } else {
      newDisplayedIndex.push(newActiveIndex[1] + 1);
    }
    setDisplayedIndex(newDisplayedIndex);
  }

  // Handle button carousel
  function handleLeftClick() {
    let newActiveIndex = map(activeIndex, (element) => 
      element === 0 ? lastElement : (element - 1)
    );
    setActiveIndex(newActiveIndex);
    calculateDisplayedIndex(newActiveIndex);
  }
  function handleRightClick() {
    let newActiveIndex = map(activeIndex, (element) => 
      element === lastElement ? (0) : (element + 1)
    );
    setActiveIndex(newActiveIndex);
    calculateDisplayedIndex(newActiveIndex);
  }

  return (
    <CarouselContext.Provider value={{ handleLeftClick, handleRightClick, activeIndex, displayedIndex }}>
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
