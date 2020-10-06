import React from "react";
import styled from 'styled-components'
import {Sticker} from './styles/Sticker'
import {AlbumName} from './styles/AlbumName'
import {TeaseImage} from './styles/TeaseImage'

const AlbumSticker = (props) => {
  console.log(props)
  let url = "";
  if(props.teaseFile.file){
    url = props.teaseFile.file.url;
  }
  return(
    <Sticker>
      <AlbumName>{props.name}</AlbumName>
      <TeaseImage src={url} alt="No pictures in this album" width="100%"/>
    </Sticker>
  )
}

export default AlbumSticker;