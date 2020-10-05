import React from "react";
import { Link, graphql, navigate } from "gatsby"
import styled from 'styled-components'
import {MailjetNavigationContainer} from './styles/MailjetNavigationContainer'
import {NavContainer} from './styles/NavContainer'
import {LeftPart} from './styles/LeftPart'
import {RightPart} from './styles/RightPart'
import {Button} from 'mailjet-react-components'
import {ExtMJButton, ExtMJMenuButton} from './styles/MJComponent'
import {Menu} from 'mailjet-react-components'
import { map } from 'lodash'
import TranslationTools from '../../Utils/TranslationService'

//  To put in an other file....
var CONTENT_TYPE = {
  NAVBAR_DROPDOWN : "ContentfulNavBarDropDown",
  NAVBAR_BUTTON : "ContentfulNavBarButton"
}

const MailjetNavigation = (props) => {

  const leftPartContent = map(props.leftSideContent, ({label, buttons, id, __typename, path}) => {
    if(__typename === CONTENT_TYPE.NAVBAR_DROPDOWN){
      return (<Menu key={id}>
                <ExtMJMenuButton key={'MenuButton'+id}>{label}</ExtMJMenuButton>
                <Menu.OptionsPanel key={'MenuOptionsPanel'+id} alignOptions="left">
                  {map(buttons, ({label, path, id}) => 
                    <Menu.Option key={id} onClick={() => navigate('/'+path+'/')}>
                      {label}
                    </Menu.Option>
                  )}
                </Menu.OptionsPanel>
              </Menu>)
    }else if(__typename === CONTENT_TYPE.NAVBAR_BUTTON){
      return (<ExtMJButton key={id} mode="secondary" onClick={() => {navigate('/'+path+'/')}}>
                {label}
              </ExtMJButton>)
    }
  })

  const translationOption = map(TranslationTools.table, val => {
    return(
      <option value={val.key}>{val.value}</option>
    )
  })
  
  return(
    <MailjetNavigationContainer>
      <NavContainer>
        <Link to={props.goTo}>
          <img alt="No picture" src={props.pictureUrl} height="40px"/>
        </Link>
        <LeftPart>
          {leftPartContent}
        </LeftPart>
        <RightPart>
          {/* <select>
            {translationOption}
          </select> */}
        </RightPart>
      </NavContainer>
    </MailjetNavigationContainer>
  )
}

export default MailjetNavigation;

