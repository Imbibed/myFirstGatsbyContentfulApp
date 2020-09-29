import React from "react";
import styled from 'styled-components'
import {Sticker} from './styles/Sticker'
import {AlbumName} from './styles/AlbumName'
import {TeaseImage} from './styles/TeaseImage'

const AlbumSticker = (props) => {

  return(
    <Sticker>
      <AlbumName>{props.name}</AlbumName>
      <TeaseImage src={props.teaseFile.file.url} alt="No pictures in this album" width="100%"/>
    </Sticker>
  )
}

export default AlbumSticker;