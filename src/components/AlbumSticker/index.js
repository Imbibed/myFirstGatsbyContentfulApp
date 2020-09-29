import React from "react";
import styled from 'styled-components'
import {Sticker} from './styles/Sticker'
import {AlbumName} from './styles/AlbumName'

const AlbumSticker = (props) => {

  return(
    <Sticker>
      <AlbumName>{props.name}</AlbumName>
      <img src={props.imageUrl}/>
    </Sticker>
  )
}

export default AlbumSticker;