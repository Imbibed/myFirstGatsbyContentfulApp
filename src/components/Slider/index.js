import React, { useState } from 'react'
import { map } from 'lodash';
import { ChevronLeft, ChevronRight } from 'mailjet-react-components/icons';
import { Div } from "mailjet-react-components";
import SliderContent from './styles/SliderContent';
import SliderDiv from "./styles/SliderDiv";
import Slide from "./styles/Slide";
import Arrow from "./styles/Arrow";

function Slider(props) {
  const { width, height, elementDisplay, slides } = props;
  const slidesLength = slides.length;
  const widthImage = width / elementDisplay;
  const widthImages = widthImage * slidesLength;
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })
  const { translate, transition, activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === slidesLength - elementDisplay) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * widthImage
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slidesLength - elementDisplay) * widthImage,
        activeIndex: slidesLength - elementDisplay
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * widthImage
    })
  }

  return (
    <Div di="f" jc="ce" ai="ce">
      <Arrow direction="left" onClick={prevSlide}>
        <ChevronLeft />
      </Arrow>
      <SliderDiv width={width} height={height}>
        <SliderContent
          translate={translate}
          transition={transition}
          width={widthImages}
        >
          {map(slides, (slide, i) => (
            <Slide width={widthImage} height={height} key={slide + i} content={slide}/>
          ))}
        </SliderContent>
      </SliderDiv>
      <Arrow direction="right" onClick={nextSlide}>
        <ChevronRight />
      </Arrow>
    </Div>
  )
}

export default Slider;