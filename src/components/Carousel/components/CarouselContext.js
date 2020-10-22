import React from 'react';

export const CarouselContext = React.createContext({
  handleLeftClick: () => {},
  handleRightClick: () => {},
  activeIndex: []
});