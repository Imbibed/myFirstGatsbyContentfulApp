import React from "react";
import { Link, graphql, navigate, useStaticQuery } from "gatsby"
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
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

//  To put in an other file....
var CONTENT_TYPE = {
  NAVBAR_DROPDOWN : "ContentfulNavBarDropDown",
  NAVBAR_BUTTON : "ContentfulNavBarButton"
}

const MailjetNavigation = (props) => {

  const leftSideData = useStaticQuery(leftSideQuery);
  console.log(leftSideData);

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

  const languageName = {
    en: "English",
    fr: "Français"
  }
  
  const intlContext = props.intl;
  
  return(
    <>
    <MailjetNavigationContainer>
      <NavContainer>
        <Link to={props.goTo}>
          <img alt="No picture" src={props.pictureUrl} height="40px"/>
        </Link>
        <LeftPart>
          {leftPartContent}
        </LeftPart>
        <RightPart>
          <Menu>
            <Menu.Button>Languages</Menu.Button>
            <Menu.OptionsPanel alignOptions="right">
              {map(intlContext.languages, (language) => {
                  return(
                    <Menu.Option key={language} onClick={() => changeLocale(language)}>
                      {languageName[language]}
                    </Menu.Option>
                  )
                })
              }
            </Menu.OptionsPanel>
          </Menu>
        </RightPart>
      </NavContainer>
    </MailjetNavigationContainer>
    <section>
      {children}
    </section>
    </>
  )
}

export default MailjetNavigation;

const leftSideQuery = graphql`
  query MyMailjetNavigationQuery($lang: String) {
    allContentfulMailjetLogo(filter: { node_locale: { eq: $lang } }) {
      edges {
        node {
          href
          node_locale
          logo {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulNavbarLeftPart(filter: { node_locale: { eq: $lang } }) {
      edges {
        node {
          label
          node_locale
          content {
            ... on ContentfulNavBarButton {
              id
              label
              path
            }
            ... on ContentfulNavBarDropDown {
              id
              label
              buttons {
                ... on ContentfulNavBarButton {
                  id
                  label
                  path
                }
              }
            }
          }
        }
      }
    }
  }
`