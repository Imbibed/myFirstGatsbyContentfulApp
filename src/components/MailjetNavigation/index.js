import React from "react";
import { Link, graphql, navigate, useStaticQuery } from "gatsby"
import {MailjetNavigationContainer} from './styles/MailjetNavigationContainer'
import {NavContainer} from './styles/NavContainer'
import {LeftPart} from './styles/LeftPart'
import {RightPart} from './styles/RightPart'
import {Button, Menu, Body2, Div} from 'mailjet-react-components'
import {ExtMJButton, ExtMJMenuButton} from './styles/MJComponent'
import { map, find } from 'lodash'
import { changeLocale } from "gatsby-plugin-intl"
import {getLanguageTable, languages} from '../../Utils/TranslationService'
import {CONTENT_TYPE} from '../../Utils/ContentfulObjectsMappingTable'
import {Cta} from './styles/Cta'

const Option = ({ children, iconName: Icon, ...rest }) => (
  <Menu.Option {...rest}>
    {Icon && <Icon style={{ margin: '1px 8px 0px 0px' }} />}
    <Body2>{children}</Body2>
  </Menu.Option>
)

const MailjetNavigation = ({children}) => {
  
  var currentLang = children.props;
  const languageTable = getLanguageTable();
  //  Retrieve all multilangual data from contentful for the navbar
  const navbarData = useStaticQuery(leftSideQuery);

  //  Then filter dynamicaly with the current language selected by user
  const translatedNavbarData = find(navbarData.allContentfulNavBarGlobal.edges, (edge) => {
    return edge.node.node_locale === languageTable[currentLang.locale].contentfulName;
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
        <Link to="/">
        <Image alt="No picture" src={logo.image.file.url} height="h7"/>
        </Link>
        <LeftPart>
          {JSXLeftSideContent}
        </LeftPart>
        <RightPart>
          {JSXRightSideContent}
        </RightPart>
        {/* <div style={{margin: '8px 16px 0 0'}}>
          <Button onClick={() => {navigate('/'+cta.path+'/')}}>{cta.label}</Button>
        </div> */}
        <Cta di="f" ai="c">
          <Button onClick={() => {navigate('/'+cta.path+'/')}}>{cta.label}</Button>
        </Cta>
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