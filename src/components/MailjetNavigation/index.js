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
import { map, find, filter } from 'lodash'
import TranslationTools from '../../Utils/TranslationService'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

//  To put in an other file....
const CONTENT_TYPE = {
  NAVBAR_DROPDOWN : "ContentfulNavBarDropDown",
  NAVBAR_BUTTON : "ContentfulNavBarButton"
}

const languageMapping = {
  en: 'en-US',
  fr: 'fr'
}

const languageName = {
  en: "English",
  fr: "Français"
}

const MailjetNavigation = ({children}) => {

  //  Retrieve all multilangual data from contentful for the navbar
  const navbarData = useStaticQuery(leftSideQuery);
  
  //  Then filter dynamicaly with the current language selected by user
  const translatedNavbarData = filter(navbarData.allContentfulNavbar.edges, (edge) => {
    return edge.node.node_locale === languageMapping[children.props.locale];
  })

  const filledtranslatedNavbarData = find(translatedNavbarData, (translatedData) => {
    return translatedData.node.leftContent && 
      translatedData.node.rigthContent && 
      translatedData.node.logo && 
      translatedData.node.cta;
  })
  console.log(filledtranslatedNavbarData)

  //  Then get wanted data in the navigation bar object
  const logo = filledtranslatedNavbarData.node.logo;
  //  This have to be handle by contentful within create path field in the navbar logo object
  logo["path"]="";
  console.log(logo);

  const leftSideContent = filledtranslatedNavbarData.node.leftContent;
  //console.log(leftSideContent);

  const leftPartContent = map(leftSideContent, ({label, buttons, id, __typename, path}) => {
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

  
  // const intlContext = props.intl;
  
  return(
    <>
      <MailjetNavigationContainer>
        <NavContainer>
          <Link to="/">
            <img alt="No picture" src={logo.image.file.url} height="40px"/>
          </Link>
          <LeftPart>
            {leftPartContent}
          </LeftPart>
          <RightPart>
            {/* <Menu>
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
            </Menu> */}
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
  query MyMailjetNavigationQuery {
    allContentfulNavbar {
      edges {
        node {
          node_locale
          name
          id
          contentful_id
          leftContent {
            ... on ContentfulNavBarButton {
              id
              path
              label
              contentful_id
            }
            ... on ContentfulNavBarDropDown {
              id
              label
              buttons {
                label
                path
                contentful_id
              }
              contentful_id
            }
          }
          logo {
            id
            alt
            name
            image {
              file {
                url
              }
            }
          }
          cta {
            label
            path
          }
          rigthContent {
            id
            path
            label
          }
        }
      }
    }
  }
`