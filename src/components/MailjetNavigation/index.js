import React from "react";
import { Link, graphql, navigate, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import {MailjetNavigationContainer} from './styles/MailjetNavigationContainer'
import {NavContainer} from './styles/NavContainer'
import {LeftPart} from './styles/LeftPart'
import {RightPart} from './styles/RightPart'
import {Button, Menu, Body2} from 'mailjet-react-components'
import { Edit, Preferences, StyledIcon } from 'mailjet-react-components/icons'
import {ExtMJButton, ExtMJMenuButton} from './styles/MJComponent'
import { map, find, filter } from 'lodash'
import TranslationTools from '../../Utils/TranslationService'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const frenchFlag = props => {
  return(
    <StyledIcon viewBox="0 0 512 512" {...props}>
      <circle style={{fill: "#F0F0F0"}} cx="256" cy="256" r="256"/><path style={{fill:"#D80027"}} d="M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z"/><path style={{fill:"#0052B4"}} d="M0,256c0,110.071,69.473,203.906,166.957,240.077V15.923C69.473,52.094,0,145.929,0,256z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </StyledIcon>
  )
}
const styledFrenchFlag = styled(frenchFlag)``;

const englishFlag = props => {
  return(
    <StyledIcon viewBox="0 0 512 512" {...props}>
      <circle style={{fill:"#F0F0F0"}} cx="256" cy="256" r="256"/><g><path style={{fill:"#D80027"}} d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"/><path style={{fill:"#D80027"}} d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"/><path style={{fill:"#D80027"}} d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"/><path style={{fill:"#D80027"}} d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819C15.236,346.596,24.993,369.036,37.574,389.565z"/></g><path style={{fill:"#0052B4"}} d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4zM120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </StyledIcon>
  )
}
const styledEnglishFlag = styled(englishFlag)``;

const Option = ({ children, iconName: Icon, ...rest }) => (
  <Menu.Option {...rest}>
    {Icon && <Icon style={{ margin: '1px 8px 0px 0px' }} />}
    <Body2>{children}</Body2>
  </Menu.Option>
)

//  To put in an other file....
const CONTENT_TYPE = {
  NAVBAR_DROPDOWN : "ContentfulNavBarDropDown",
  NAVBAR_BUTTON : "ContentfulNavBarButton"
}

/*const languageMapping = {
  en: 'en-US',
  fr: 'fr'
}

const languageName = {
  en: "English",
  fr: "Français"
}*/

const languageTable = {
  en: {name: 'English', contentfulName: 'en-US', icon: styledEnglishFlag},
  fr: {name: 'Français', contentfulName: 'fr', icon: styledFrenchFlag}
}

const languages = ['en', 'fr']

const MailjetNavigation = ({children}) => {
  
  var currentLang = children.props;
  //  Retrieve all multilangual data from contentful for the navbar
  const navbarData = useStaticQuery(leftSideQuery);

  //  Then filter dynamicaly with the current language selected by user
  const translatedNavbarData = find(navbarData.allContentfulNavBarGlobal.edges, (edge) => {
    return edge.node.node_locale === languageTable[children.props.locale].contentfulName;
  })
  
  //  Then get wanted data in the navigation bar object
  const logo = translatedNavbarData.node.navbar.logo;
  //  This have to be handle by contentful within create path field in the navbar logo object
  logo["path"]="/";

  const leftSideContent = translatedNavbarData.node.navbar.leftContent;

  const rightSideContent = translatedNavbarData.node.navbar.rigthContent;

  const JSXLeftSideContent = map(leftSideContent, ({label, buttons, id, __typename, path}) => {
    if(__typename === CONTENT_TYPE.NAVBAR_DROPDOWN){
      return (<Menu key={id}>
                <ExtMJMenuButton key={'MenuButton'+id}>{label}</ExtMJMenuButton>
                <Menu.OptionsPanel key={'MenuOptionsPanel'+id} alignOptions="left">
                  {map(buttons, ({label, path, id}) => 
                    <Menu.Option key={'MenuOption'+id} onClick={() => navigate('/'+path+'/')}>
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
  
  const JSXRightSideContent = map(rightSideContent, ({id, label, path}) => {
    return (
      <ExtMJButton key={id} mode="secondary" onClick={() => {navigate('/'+path+'/')}}>{label}</ExtMJButton>
    )
  })

  const cta = translatedNavbarData.node.navbar.cta;
  
  var setIconButtonIcon = () => {
    let i;
    for(i=0;i<Object.keys(languageTable).length;i++){
      if(currentLang.locale === Object.keys(languageTable)[i].toString()){
        return languageTable[Object.keys(languageTable)[i]].icon;
      }
    }
  }

  return(
    <>
      <MailjetNavigationContainer>
        <NavContainer>
          <Link to="/">
            <img alt="No picture" src={logo.image.file.url} height="40px"/>
          </Link>
          <LeftPart>
            {JSXLeftSideContent}
          </LeftPart>
          <RightPart>
            {JSXRightSideContent}
          </RightPart>
          <div style={{margin: '8px 16px 0 0'}}>
            <Button onClick={() => {navigate('/'+cta.path+'/')}}>{cta.label}</Button>
          </div>
          <div style={{margin: '8px 0 0 0'}}>
            <Menu>
              <Menu.IconButton icon={setIconButtonIcon()} showCaret={true} isLoading={false}/>
              <Menu.OptionsPanel alignOptions={'right'}>
                {map(languages, (language) => {
                  return (
                    <Option 
                      key={language} 
                      iconName={languageTable[language].icon} 
                      readOnly
                      onClick={() => changeLocale(language)}>
                        {languageTable[language].name}
                    </Option>
                  )
                })
                }
              </Menu.OptionsPanel>
            </Menu>
          </div>
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
    allContentfulNavBarGlobal {
      edges {
        node {
          name
          node_locale
          navbar {
            id
            cta {
              label
              path
            }
            leftContent {
              ... on ContentfulNavBarButton {
                id
                label
                path
              }
              ... on ContentfulNavBarDropDown {
                id
                label
                buttons {
                  id
                  label
                  path
                }
              }
            }
            logo {
              image {
                file {
                  url
                }
              }
            }
            rigthContent {
              id
              label
              path
            }
          }
        }
      }
    }
  }
`